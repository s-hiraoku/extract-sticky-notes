import {
  FILE_ID,
  FIGMA_ENDPOINT,
  FIGMA_TOKEN,
  FIGMA_URL,
  OUTPUT_DIRECTORY,
  OUTPUT_FILE_NAME,
} from "./config";
import * as fs from "fs";
import * as path from "path";

type StickyNote = {
  text: string;
  url: string;
};

type Node = {
  type: string;
  characters: string;
  id: string;
  children?: Node[];
};

export const getStickyNotes = async (
  fileId: string,
  apiUrl: string,
  apiKey: string
): Promise<StickyNote[]> => {
  const headers = { "X-Figma-Token": apiKey };
  const url = `${apiUrl}${fileId}`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    console.error("Failed to fetch Figma file data.");
    return null;
  }

  const data = await response.json();
  const nodes = data.document.children;

  const stickyNotes: StickyNote[] = [];

  const searchStickyNotes = (node: Node) => {
    if (node.type === "STICKY") {
      const text = node.characters;
      const url = `${FIGMA_URL}${fileId}?node-id=${node.id}`;
      stickyNotes.push({ text, url });
      return;
    }
    if (!node.children) return;
    node.children.forEach(searchStickyNotes);
  };

  nodes.forEach(searchStickyNotes);
  return stickyNotes;
};

export const saveToCsv = (
  stickyNotes: StickyNote[],
  fileDirectory: string = OUTPUT_DIRECTORY,
  fileName: string = OUTPUT_FILE_NAME
): void => {
  if (!fs.existsSync(fileDirectory)) {
    fs.mkdirSync(fileDirectory);
  }

  const filePath = path.join(fileDirectory, fileName);

  const header = "Title,Description\n";
  const rows = stickyNotes.map((note) => `${note.text},${note.url}`).join("\n");

  fs.writeFileSync(filePath, header + rows, "utf8");
  console.log(`Sticky notes saved to ${OUTPUT_DIRECTORY}/${fileName}`);
};

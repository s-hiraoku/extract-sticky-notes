import * as fs from 'fs';
import * as path from 'path';

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
  apiKey: string,
  figmaUrl: string
): Promise<StickyNote[]> => {
  const headers = { 'X-Figma-Token': apiKey };
  const url = `${apiUrl}${fileId}`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    console.error('Failed to fetch Figma file data.');
    return null;
  }

  const data = await response.json();
  const nodes = data.document.children;

  const stickyNotes: StickyNote[] = [];

  const searchStickyNotes = (node: Node) => {
    if (node.type === 'STICKY') {
      const text = node.characters;
      const url = `${figmaUrl}/${fileId}?node-id=${node.id}`;
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
  fileDirectory: string,
  fileName: string
): void => {
  if (!fs.existsSync(fileDirectory)) {
    fs.mkdirSync(fileDirectory);
  }

  const filePath = path.join(fileDirectory, fileName);

  const header = 'Title,Description\n';
  const rows = stickyNotes.map((note) => `${note.text},${note.url}`).join('\n');

  fs.writeFileSync(filePath, header + rows, 'utf8');
  console.log(`Sticky notes saved to ${fileDirectory}/${fileName}`);
};

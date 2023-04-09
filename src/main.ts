import { FILE_ID, FIGMA_ENDPOINT, FIGMA_TOKEN } from "./config";
import { getStickyNotes, saveToCsv } from "./extract-sticky-notes";

const main = async () => {
  const stickyNotes = await getStickyNotes(
    FILE_ID,
    FIGMA_ENDPOINT,
    FIGMA_TOKEN
  );
  if (!stickyNotes) {
    console.error("Failed to extract sticky notes.");
    return;
  }
  saveToCsv(stickyNotes);
};

main();

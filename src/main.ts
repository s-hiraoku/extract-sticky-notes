import dotenv from 'dotenv';
import { getStickyNotes, saveToCsv } from './extract-sticky-notes';

const main = async () => {
  dotenv.config();
  const stickyNotes = await getStickyNotes(
    process.env.FILE_ID,
    process.env.FIGMA_ENDPOINT,
    process.env.FIGMA_TOKEN,
    process.env.FIGMA_URL
  );

  if (!stickyNotes) {
    console.error('Failed to extract sticky notes.');
    return;
  }
  saveToCsv(
    stickyNotes,
    process.env.OUTPUT_DIRECTORY,
    process.env.OUTPUT_FILE_NAME
  );
};

main();

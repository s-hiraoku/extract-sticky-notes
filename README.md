# Figma Sticky Notes Extractor

This is a Node.js script that extracts all stickies from a Figma file and outputs a CSV file for import into GitLab.
The script populates the description of the GitLab issue with a link to the URL of that sticky, allowing for easy navigation from the issue to Figma.

## Getting Started

Before running the script, you need to set up the Figma API token and the ID of the Figma file from which you want to extract stickies.

1. To obtain the Figma API token, follow the instructions in the [Figma API documentation](https://www.figma.com/developers/docs).
2. Open the Figma file from which you want to extract stickies and copy the ID from the URL.
3. Create a `.env` file in the project root directory and set the following environment variables:
   - `FIGMA_TOKEN`: Your Figma API token
   - `FILE_ID`: ID of the Figma file you want to extract from
   - `FIGMA_ENDPOINT`: Figma API endpoint (https://api.figma.com/v1/files/)
   - `FIGMA_URL`: Base URL of the Figma file (https://www.figma.com/file/)
   - `OUTPUT_DIRECTORY`: Directory to save the CSV file
   - `OUTPUT_FILE_NAME`: Name of the output CSV file
4. Use the `.env-example` as a reference to set the environment variables.

## Usage

1. Run `npm install` to install the dependencies.
2. Execute the script by running `npm start`.
3. The script will extract all stickies from the specified Figma file and save them as a CSV file in the designated directory (default is `output`).

## Output CSV for import into GitLab Issues.

This Node.js script also generates a CSV file containing information from the FigJam stickies and imports it into GitLab Issues. the CSV file contains the text of each sticky.

A CSV file named `sticky_notes.csv` will be created in the project root directory. You can import this file into GitLab Issues.

### Importing into GitLab Issues

1. log in to GitLab and navigate to the desired project.
2. click "Issues" on the sidebar to access the issues page.
3. click the "Import issues" drop-down menu in the upper right corner and select "CSV".
4. click the "Select CSV file" button and select the `sticky_notes.csv` file you just generated.
5. Adjust the mapping options as needed and click the "Import Issue" button.

This will import the FigJam stickies as Issues in GitLab.

---

## License

The license for this project is the MIT License. See the [LICENSE](LICENSE) file for details.

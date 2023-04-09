# Figma Sticky Notes Extractor

This is a Node.js script that extracts all stickies from a Figma file and outputs a CSV file for import into GitLab.
It will populate the description of the Gitlab issue with a link to the URL of that sticky, so you can easily navigate from the issue to Figma.

## Getting Started

Before running the script, you need to enter the Figma API token and the ID of the Figma file from which you want to extract stickies.

To obtain the Figma API token, follow the instructions in [Figma API documentation](https://www.figma.com/developers/docs). 2.
2. open the Figma file from which you want to extract stickies and copy the ID from the URL. 3. 3.
3. 3. in the `config.ts` file, replace the `FIGMA_TOKEN` and `FILE_ID` values with your API token and file ID, respectively.

## How to use

1. run `npm install` to install the dependencies. 2. 2.
Run `npm start` to run the script. 3.
3. 3. the script will extract all stickies from the specified Figma file and save them as a CSV file in the `output` directory.

## Output CSV for import into GitLab Issues.

This Node.js script also generates a CSV file containing information from the FigJam stickies and imports it into GitLab Issues. the CSV file contains the text of each sticky.

A CSV file named `sticky_notes.csv` will be created in the project root directory. You can import this file into GitLab Issues.

### Importing into GitLab Issues

1. log in to GitLab and navigate to the desired project 2.
2. click "Issues" on the sidebar to access the issues page. 3.
3. click the "Import issues" drop-down menu in the upper right corner and select "CSV" 4.
4. 4. click the "Select CSV file" button and select the `sticky_notes.csv` file you just generated.
5. 5. Adjust the mapping options as needed and click the "Import Issue" button.

This will import the FigJam stickies as Issues in GitLab.

---

## Configuration

The script has several configuration options that you can adjust to your liking:

- `figma_endpoint`: The Figma API endpoint, which can be changed if Figma changes the API endpoint.
- `output_directory`: The directory where the CSV files will be stored.
- `output_file_name`: Name of the CSV file: Name of the CSV file.

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

The license for this project is the MIT License. See the [LICENSE](LICENSE) file for details.

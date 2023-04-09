# Figma Sticky Note Extractor

This is a Node.js script that extracts all the sticky notes from a Figma file and saves them to a CSV file.

## Getting Started

Before running the script, you'll need to provide your Figma API token and the ID of the Figma file that you want to extract the sticky notes from.

1. To get your Figma API token, follow the instructions in the [Figma API documentation](https://www.figma.com/developers/docs).
2. Open the Figma file you want to extract sticky notes from, and copy the ID from the URL.
3. In the `config.ts` file, replace the values of `FIGMA_TOKEN` and `FILE_ID` with your own API token and file ID, respectively.

## Usage

1. Install the dependencies by running `npm install`.
2. Run the script by running `npm start`.
3. The script will extract all the sticky notes from the specified Figma file and save them to a CSV file in the `output` directory.

## Configuration

The script provides some configuration options that you can adjust to your liking:

- `FIGMA_ENDPOINT`: The Figma API endpoint. You can change this if Figma changes their API endpoint.
- `OUTPUT_DIRECTORY`: The directory where the CSV file will be saved.
- `OUTPUT_FILE_NAME`: The name of the CSV file.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

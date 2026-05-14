# mp3-tag-editor

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno module for programmatically editing ID3 tags in MP3 files.

This project provides an example script that demonstrates how to add or modify metadata such as title, artist, album art, and synchronized lyrics.

## Demo

To run the demonstration script:

```sh
deno run --allow-read --allow-write example.js
```

This command reads `theme-of-kawada-elementary-school_src.mp3`, applies the tags defined in `example.js`, and saves the new file as `theme-of-kawada-elementary-school.mp3`.

## Features

- Edit common ID3 tags (title, artist, album, genre).
- Embed album art from an image file (e.g., JPEG).
- Embed synchronized lyrics (`SYLT`) from a timestamped CSV file.
- Embed unsynchronized lyrics (`USLT`) from a plain text file.

## Requirements

- [Deno](https://deno.land/)

## Usage

1.  Ensure you have Deno installed.
2.  Clone this repository.
3.  Run the example script to process the sample files:
    ```sh
    deno run --allow-read --allow-write example.js
    ```

You can modify `example.js` to edit tags for your own MP3 files.

## Example Files

The repository includes a full set of sample data to demonstrate functionality:

-   `example.js`: The main script that demonstrates how to use the tag editor.
-   `theme-of-kawada-elementary-school_src.mp3`: The original MP3 file.
-   `theme-of-kawada-elementary-school.jpg`: The album cover image.
-   `theme-of-kawada-elementary-school.lyrics.csv`: Synchronized lyrics with timestamps in milliseconds.
-   `theme-of-kawada-elementary-school.lyrics.txt`: Unsynchronized, plain text lyrics.

### Music Attribution

-   Sample music: [Theme of Kawada Elementary School](https://fukuno.jig.jp/4727) CC BY taisukef

## License

MIT License
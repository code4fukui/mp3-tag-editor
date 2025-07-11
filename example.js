import { CSV } from "https://js.sabae.cc/CSV.js";
import { MediaTags } from "https://code4fukui.github.io/jsmediatags-es/MediaTags.js";

const makeLyrics = (data, descriptor = "") => {
  const lyrics = {
    type: 1, // 1	Lyrics
    text: data.map(i => [i.lyrics, i.t]),
    timestampFormat: 2, // 2	Absolute time, 32 bit sized, using milliseconds as unit
    language: "jpn", // jpn if Japanese
    description: descriptor, // descriptor?
  };
  return lyrics;
};

//const fn = Deno.args[0];
const fn = "theme-of-kawada-elementary-school";

const mp3 = await Deno.readFile(fn + "_src.mp3");
const data = await CSV.fetchJSON(fn + ".lyrics.csv");
const tags = await MediaTags.decode(mp3);
console.log(tags);

tags.tags.title = "河和田小学校のテーマ";
tags.tags.artist = "taisukef";
const artist = tags.tags.artist;
tags.tags.album = "鯖江の曲";
tags.tags.picture = { data: await Deno.readFile(fn + ".jpg"), description: artist };
tags.tags.genre = "Rock"; // or array of strings

tags.tags.SYLT = { data: makeLyrics(data, artist) };
tags.tags.lyrics = { lyrics: await Deno.readTextFile(fn + ".lyrics.txt"), language: "jpn", description: artist };

// TSSE unsupported
//delete tags.tags.TSSE;

const mp3dst = await MediaTags.encode(mp3, tags);
await Deno.writeFile(fn + ".mp3", mp3dst);

const tags2 = await MediaTags.decode(mp3dst);
console.log(tags2);

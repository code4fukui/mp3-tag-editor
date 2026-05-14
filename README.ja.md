# mp3-tag-editor


MP3ファイルのID3タグをプログラムで編集するためのDenoモジュールです。

このプロジェクトは、タイトル、アーティスト、アルバムアート、同期歌詞などのメタデータを追加または変更する方法を示すサンプルスクリプトを提供しています。

## デモ

デモスクリプトを実行するには:

```sh
deno run --allow-read --allow-write example.js
```

このコマンドは `theme-of-kawada-elementary-school_src.mp3` を読み込み、`example.js` で定義されたタグを適用して、新しいファイルを `theme-of-kawada-elementary-school.mp3` として保存します。

## 機能

- 一般的なID3タグ（タイトル、アーティスト、アルバム、ジャンル）の編集。
- 画像ファイル（例: JPEG）からのアルバムアートの埋め込み。
- タイムスタンプ付きCSVファイルからの同期歌詞（`SYLT`）の埋め込み。
- プレーンテキストファイルからの非同期歌詞（`USLT`）の埋め込み。

## 要件

- [Deno](https://deno.land/)

## 使い方

1. Denoがインストールされていることを確認します。
2. このリポジトリをクローンします。
3. サンプルスクリプトを実行して、サンプルファイルを処理します:
    ```sh
    deno run --allow-read --allow-write example.js
    ```

`example.js` を変更して、独自のMP3ファイルのタグを編集できます。

## サンプルファイル

リポジトリには、機能を示すためのサンプルデータ一式が含まれています:

-   `example.js`: タグエディタの使用方法を示すメインスクリプト。
-   `theme-of-kawada-elementary-school_src.mp3`: 元のMP3ファイル。
-   `theme-of-kawada-elementary-school.jpg`: アルバムカバー画像。
-   `theme-of-kawada-elementary-school.lyrics.csv`: ミリ秒単位のタイムスタンプ付き同期歌詞。
-   `theme-of-kawada-elementary-school.lyrics.txt`: 非同期のプレーンテキスト歌詞。

### 楽曲のクレジット

-   サンプル楽曲: [Theme of Kawada Elementary School](https://fukuno.jig.jp/4727) CC BY taisukef

## ライセンス

MIT License

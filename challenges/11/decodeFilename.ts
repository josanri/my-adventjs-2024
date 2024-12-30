function decodeFilename(filename: string): string {
  return (filename.match(/\d*_([\w-]*.[\w]*).\w/) ?? ["", ""])[1];
}

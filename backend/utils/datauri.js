import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  if (!file || !file.buffer) {
    console.error("getDataUri: No file or buffer received!");
    return null;
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname);
  const mimeType = file.mimetype;
  return parser.format(extName, file.buffer);
};

export default getDataUri;

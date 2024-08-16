import { fileURLToPath } from "node:url";

const fileURL = new URL('file:///path/to/file.txt');
const filePath = fileURLToPath(fileURL);
console.log(filePath); // Output: /path/to/file.txt

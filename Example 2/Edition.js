const fs = require("fs");
const {promisify} = require("util");
const read = promisify(fs.readFile);

module.exports = {
    read: async () => {
        let text = await read("Text.txt");
        return text.toString();
    }
}
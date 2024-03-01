const fs = require("fs")


const create =fs.writeFileSync("text.txt","File One")
const create01 =fs.writeFileSync("text1.txt","File Two")
const create02 =fs.writeFileSync("text2.txt","File Three")

const read = fs.readFileSync("text.txt","utf-8")

// console.log(read);

const add_more = fs.appendFileSync("text.txt","    Second Text ")


const delete_file = fs.unlinkSync("text1.txt")

// const make_folder1 = fs.mkdirSync("Folder1")
// const make_folder2 = fs.mkdirSync("Folder2")
// const make_folder3 = fs.mkdirSync("Folder3")


const file_in_folder1 = fs.writeFileSync("Folder1/test1.txt","File One")

const file_in_folder2 = fs.writeFileSync("Folder2/test2.txt","File Two")
const file_in_folder3 = fs.writeFileSync("Folder3/test3.txt","File Three")


// const server = http.createServer((req, res) => {
//   const url = req.url;
//   res.end("Server is running!");
// });
// server.listen(8000);




require('dotenv').config()
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.config().cloud_name)

const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, './src/client/src/assets/images');
//passsing directoryPath and callback function

let arr = []

fs.readdir(directoryPath, async function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    let res = await new Promise((resolve, reject) => {
        let i = 0
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            i++
            let name = './src/client/src/assets/images/' + file
            arr.push(name)
            if (i == files.length) {
                resolve(arr)
            }
        });
    })
    console.log("Done")
    upload()
});

let map = {}

async function upload() {
    // let res = await new Promise((res, rej) => {
        let pro = []
        arr.forEach((filePath, idx) => {
            pro.push(new Promise((res,rej) => {
                cloudinary.uploader.upload(filePath, {
                    resource_type: "image",
                }).then((result) => {
                    console.log(idx)
                    map[result.original_filename] = result.url
                    res(1)
                }).catch((err) => {
                    console.log(err)
                })
            })
            )
        })
    // })
    let wait = await Promise.all(pro);
    console.log("All set")
    fs.writeFile("./fileUrls.json", JSON.stringify(map), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    console.log(map);
}

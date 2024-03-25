const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload')

let initial_path = path.join(__dirname, "public");

const app = express()
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
});

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "html\\editor_blog.html"));
});

//upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();

    //image name
    let imagename = date.getDate() + date.getTime() + file.name;

    //image upload path
    let path = 'public/uploads/' + imagename;

    //create upload
    file.mv(path, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json(`uploads/${imagename}`);
        }
    });
});


app.listen("3008", () => {
    console.log("Listening......");
});
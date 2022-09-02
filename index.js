const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const cors = require("cors");
const multer = require("multer")
const path = require("path")

dotenv.config()


console.log(process.env.MONGO_URL)

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URL


app.use(express.json())
app.use(express.text())
app.use(
    cors({
        credentials: true,
        origin: process.env.ORIGIN || "http://localhost:3000",
    })
)
app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("connected to MongoDB"))
    .catch(err => console.log(err))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});


app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute)
app.use("/api/categories", categoryRoute)

app.use(express.static(path.join(__dirname, "/blog-client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/blog-client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Backend is runing on port ${PORT}.`)
})




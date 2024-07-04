import express from "express"
const app = express()
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is Running At Port ${PORT}`);
})

app.get("/", (req, res) => {
    res.send({
        message: "Server is Working"
    })
})
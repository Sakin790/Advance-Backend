import express from "express"

const app = express()


app.get("/", (req, res) => {
    res.status(200).json({
        messaage: "Server Is working"
    })
})
app.listen(3001, () => {
    console.log(`Server running at Port 3001`);
})
import express from "express"
const app = express()






const PORT = 8080


app.get("/", (req, res) => {
    console.log(`Header is ${req.headers}`);
    res.send({
        message: "Server is Working"
    })
})



app.listen(PORT, () => {
    console.log(`Server is Running At Port ${PORT}`);
})

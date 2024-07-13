import express from "express"
import { customRateLimiter } from "./middleware/rateLimit.js";

const app = express()







app.get("/", customRateLimiter(5, 10000), (req, res) => {
    console.log(res.setHeader("X-myName", "Sakin"));
    res.status(200).json({
        messaage: "Server Is working"
    })
})
app.listen(3001, () => {
    console.log(`Server running at Port 3001`);
})
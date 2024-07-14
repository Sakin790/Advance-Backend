import http from 'http';
import fs from "fs"

const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log("Incoming Request.....");

    if (req.url !== "/") {
        res.end()
    }

    /**
    

    =>For text file
        const readbleFileStreme = fs.createReadStream("random_text.txt")
        readbleFileStreme.pipe(res)
        console.log(req.url);
     
     => for video file
         const readbleVideo = fs.createReadStream("webhooks.mp4")
         readbleVideo.pipe(res)
         res.writeHead(200, { "Content-Type": "video/mp4" })
     
     */





});

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

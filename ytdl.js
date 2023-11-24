const ytdl = require('ytdl-core'); 
const fs = require('fs') 

let url = "https://youtu.be/AX6OrbgS8lI?si=aN4g4hRQPXdqp7wp";
ytdl(url).pipe(fs.createWriteStream('video.mp4')); 


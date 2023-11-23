const ytdl = require('ytdl-core');
const fs = require('fs');

const videoURL = 'https://youtu.be/AX6OrbgS8lI?si=aN4g4hRQPXdqp7wp';

ytdl.getInfo(videoURL, (err, info) => {
  if (err) {
    console.error(err);
    return;
  }

  const videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highest' });

  if (!videoFormat) {
    console.error('No suitable format found');
    return;
  }

  const output = fs.createWriteStream('video.mp4');

  ytdl(videoURL, { format: videoFormat })
    .pipe(output);

  output.on('finish', () => {
    console.log('Download complete');
  });
});

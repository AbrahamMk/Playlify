const express = require('express');
const cors = require('cors');
const authRoutes = require('./authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);


const songs = [
  {
    name: "Gherlta",
    artist: "Dawit Getachew",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51T6EHlnozL._SS500.jpg",
    source: "",
  },
  {
    name: "Melhike",
    artist: "Samuel T/Michael",
    cover: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/b8/3e/ec/b83eecf8-8bdf-7cd3-7724-aa6133c59f78/198003621466.jpg/600x600bb.jpg",
    source: "",
  },
  {
    name: "Aminhalew",
    artist: "Dawit Getachew",
    cover: "https://i.scdn.co/image/ab67616d0000b273fef46b0d17dd8a5ba3f18070",
    source: "https://www.boomplay.com/songs/75684276",
  },
];

// Endpoint to get the list of songs
app.get('/songs', (req, res) => {
  res.json(songs);
});

// Endpoint to add a new song
app.post('/songs', (req, res) => {
  const { name, artist, cover, source } = req.body;

  // Save the new song to your data source (e.g., database)
  // For simplicity, we'll just log the new song data
  console.log('New Song:', { name, artist, cover, source });

  res.sendStatus(200);
});

// Endpoint to serve the audio file of a song
app.get('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  const song = songs.find((song) => songId === song.name.toLowerCase().replace(/\s/g, ''));

  if (!song) {
    return res.status(404).json({ error: 'Song not found' });
  }

  res.set('Content-Type', 'audio/mpeg');
  res.set('Accept-Ranges', 'bytes');

  // Serve the audio file from your server
  // Replace the file path with the actual path to your audio files
  const filePath = `path/to/audio/${songId}.mp3`;
  res.sendFile(filePath);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
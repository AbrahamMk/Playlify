import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlay, faPause, faStepBackward, faStepForward, faTrash } from '@fortawesome/free-solid-svg-icons';


const App = () => {
const [playlistName, setPlaylistName] = useState('');
const [songs, setSongs] = useState([
  {
    name: "Gheralta",
    artist: "Dawit Getachew",
    cover: " https://images-na.ssl-images-amazon.com/images/I/51T6EHlnozL._SS500.jpg",
    source:"https://music.apple.com/us/album/gheralta/986425561?i=986427910",
   },
   {
    name: "Bees and Bulls",
    artist: "John Powell",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d8/0e/2c/d80e2c5f-1e10-6fea-6b23-924628b8f7ee/Ferdinand_iTunes_COVER.jpg/600x600bb-60.jpg",
    source:"https://music.apple.com/us/album/bees-and-bulls/1320317871?i=1320318106",
   },

   {
    name: "Yekermo Sew",
    artist:"Mulatu Astatke",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/f3/95/07/f39507fc-93bc-bcbe-ff63-5eee27936310/dj.tbywneqv.jpg/592x592bb.webp",
    source: "https://music.apple.com/us/album/y%C3%A8k%C3%A8rmo-s%C3%A8w-a-man-of-experience-and-wisdom/78928362?i=78928215",
   },
   {
    name: "Born to Play",
    artist:"Jon Batiste",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/95/83/bc9583e2-b3dd-359a-e1ba-3c1be0dcae96/20UM1IM11311.rgb.jpg/600x600bb-60.jpg",
    source: "https://music.apple.com/us/album/born-to-play/1543828609?i=1543828845",
   },
  
]);
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const [currentSong, setCurrentSong] = useState(null);
const [isPlaying, setIsPlaying] = useState(false);
const [volume, setVolume] = useState(50);
const [progress, ] = useState(0);

const handleSubmit = (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const newSong = {
    name: form.get('songName'),
    artist: form.get('artistName'),
    cover: form.get('coverURL'),
    source: form.get('songURL'),
  };
  setSongs([...songs, newSong]);
  setCurrentSong(newSong);
  setIsPlaying(true);
  e.target.reset();
};

const handleSongClick = (song) => {
if (currentSong && currentSong.source === song.source){
setIsPlaying(!isPlaying);
}
else {
setCurrentSong(song);
setIsPlaying(true)
}
};

const handlePlayPause = () => {
setIsPlaying(!isPlaying);
};

const handleNext = () => {
};

const handlePrevious = () => {

};

const handleVolumeChange = (event) => {
const newVolume = event.target.value;
setVolume(newVolume);
};

const handleToggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen);
};



const handleDeleteSong = (index) => {
  const updatedSongs = [...songs];
  updatedSongs.splice(index, 1);
  setSongs(updatedSongs);
};

return (
<Container>
  {isSidebarOpen && (
    <Sidebar>
        <img
    src="https://cdn3.iconfinder.com/data/icons/multimedia-flat-icons-vol-1/256/26-512.png"
    alt=""
  /> 
      <h4> 

        Add Songs
      </h4>

      <PlaylistForm onSubmit={handleSubmit}>
        <PlaylistInput
          type="text"
          name="playlistName"
          placeholder="Enter playlist"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <PlaylistInput
          type="text"
          name="songName"
          placeholder="Enter Song Name"
        />
        <PlaylistInput
          type="text"
          name="artistName"
          placeholder="Enter Artist"
        />
        <PlaylistInput
          type="text"
          name="coverURL"
          placeholder="Enter Cover"
        />
         <PlaylistInput
          type="text"
          name="Song URL"
          placeholder="Enter Song URL"
        />
        <PlaylistButton type="submit">Add Song</PlaylistButton>
      </PlaylistForm>
      <LogoutButton href="/">Logout</LogoutButton>
    </Sidebar>
  )}
  <ToggleSidebarButton onClick={handleToggleSidebar}>
    {isSidebarOpen ? (
      <FontAwesomeIcon icon={faTimes} />
    ) : (
      <FontAwesomeIcon icon={faBars} />
    )}
  </ToggleSidebarButton>
  

  
  
  <playlistTitle> 
    <TitleText>  Your  {playlistName}   Playlists </TitleText> 
    </playlistTitle> 
  <Playlist>
    {songs.map((song, index) => (
      <PlaylistItem key={index}>
      <a href={song.source} target="_blank" rel="noopener noreferrer">
        <SongCover src={song.cover} alt="Song Cover" />
        <SongDetails>
          <p>{song.name}</p>
          <p>{song.artist}</p>
        </SongDetails>
      </a>
      <DeleteButton onClick={() => handleDeleteSong(index)}>
        <FontAwesomeIcon icon={faTrash} />
      </DeleteButton>
    </PlaylistItem>
    
    ))}
  </Playlist>

  <PlayerDock>
    <PlayerControls>
      <button onClick={handlePrevious}>
      <FontAwesomeIcon icon={faStepBackward} />
      </button>
      <button onClick={handlePlayPause}>
        {isPlaying ?<FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
        </button>
      <button onClick={handleNext}>
        <FontAwesomeIcon icon={faStepForward} />
      </button>
    </PlayerControls>
    <PlayerDuration>
      <PlayerLine>
        <PlayerLineProgress progress={progress} />
      </PlayerLine>
      <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
    </PlayerDuration>
    {currentSong && ( 
        <audio src={currentSong.source} controls autoPlay={isPlaying} />
    )}
  </PlayerDock>

</Container>
);
};



const LogoutButton = styled.a`
  text-decoration: none;
  color: #000;
  position: fixed;
  font-weight: bold;
  left: 20px;
  top: 510px;
  &:hover {
    color: #ff0000;
  }
`;

const PlaylistTitle = styled.div`
  text-align: center;
`;

const TitleText = styled.h1`
  font-size: 30px;
  color: #333;
  margin: 10px;
  top: 0;
 left: 50%;
 position: absolute;
 color: white;
 background-color: black;
 height: 35px;
 border-radius: 3px;

`;

export const Container = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh  ;
  width: 100vw ;
  font-family: "Times New Roman", Times, serif;
  
`;

export const Sidebar = styled.div`
  width: 200px;
  border-radius: px;
  
  padding: 20px;
  background-color: white;
  font-family: "Times New Roman", Times, serif;
  img {
    height: 6vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 10px;
    left: 13px;
      }
    
      h4{
        color:#0b172a ;
        left: 70px;
        position: fixed;

      }
`;

export const PlaylistForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  font-family: "Times New Roman", Times, serif;
  justify-content: center;
  color: #4682b4;
  font-size: 0.6rem;
  position: fixed;
   top: 70px;

`;

export const PlaylistInput = styled.input`
  display: flex;
  margin-bottom: 15px;
  border: 20px;
  border-radius: 50px;
  align-items:center;
  justify-content: center;
  font-family: "Times New Roman", Times, serif;
  padding: 0.5px;
  font-size: 0.8rem;

  color: black;

  
`;

export const PlaylistButton = styled.button`
padding: 5px;
border-radius: 50px;
border: none;
background-color: #4682b4;
color: black;
background-color: white;
font-size: 0.5rem;
cursor: pointer;
font-family: "Times New Roman", Times, serif;
font-size: 0.7rem;
`;


export const Playlist = styled.div`
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 50px;

  margin-top: 80px;
  flex: 1;
  overflow-y: auto;
  
`;




export const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SongCover = styled.img`
  width: 200px;
  height: 250px;  
background-color: #bc4123;
background-color-widht: 200px;
  padding: 30px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
`;
 

export const SongDetails = styled.div`
   background-color: #bc4123;
   height: 50px;
   width: 260px;
   color: white;
   border: black;
   border-radius: 5px;

   cursor: pointer;
   font-size: 0.8rem;
   justify-content: center;
   align-items: center;s
   font-family: "Times New Roman", Times, serif;
`;
export const ToggleSidebarButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;  
  top: 50px;
  color: white;
  background-color:#bc4123 ;
  aligh-items:center;
  border-radius: 1px;
 
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;
`;

export const PlayerDock = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(188, 65, 23, 0.5);
  padding: 20px;
  border:radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8px;
  flex: 0 0 5px;
  transition: transform 0.6s ease-in-out, opacity 0.3 ease-in-out;

  &:hover {
    transform: translateY(0);
    opacity: 1;
  }
  &:not(:hover) {
    opacity: 0;
  }

  @media (max-height: 600px) {
    height: 10px;
  }
`;


const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff0000;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #cc0000;
  }
`;
export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 40px;
  height: 5px;
  
`;

export const PlayerDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 700px;
  height: 1px;
  height: 1px;
  background-color:  black;
`;

export const PlayerLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color:  rgba(188, 65, 23, 0.5);
  
`;

export const PlayerLineProgress = styled.div`
  height: 50%;
  background-color: rgba(188, 65, 23, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

export default App;
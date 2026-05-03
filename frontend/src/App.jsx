import React, { useContext, useEffect } from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

const App = () => {

  const { audioRef, track, setTime } = useContext(PlayerContext);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setTime({
        currentTime: {
          minute: Math.floor(audio.currentTime / 60),
          second: Math.floor(audio.currentTime % 60)
        },
        totalTime: {
          minute: Math.floor(audio.duration / 60) || 0,
          second: Math.floor(audio.duration % 60) || 0
        }
      });
    };

    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [audioRef]);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar />
        <Display />
      </div>

      <Player />

      <audio ref={audioRef} src={track?.file} preload="auto" />
    </div>
  );
};

export default App;
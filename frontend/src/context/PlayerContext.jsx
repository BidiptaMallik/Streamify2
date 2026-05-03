import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import { audio } from "motion/react-client";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {

    const audioRef = useRef(null);
    const seekBar = useRef(null);
    const seekBg = useRef(null);

    const [track, setTrack] = useState(songsData[1]);
    const [playStatus, setPlayStatus] = useState(false);

    const [time, setTime] = useState({
        currentTime: { minute: 0, second: 0 },
        totalTime: { minute: 0, second: 0 }
    });

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    const playWithId = async(id) =>{
        await setTrack(songsData[id]);
        audioRef.current.play();
        setPlayStatus(true);
    };

    const previous = async()=>{
        if(track.id > 0){
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async()=>{
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async(e)=>{
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.clientWidth) * audioRef.current.duration;
        await audioRef.current.play();
        setPlayStatus(true);
    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100 + "%";

                setTime({
                    currentTime: {
                        minute: Math.floor(audioRef.current.currentTime / 60),
                        second:Math.floor(audioRef.current.currentTime % 60)
                    },
                    totalTime: {
                        minute: Math.floor(audioRef.current.duration / 60),
                        second:Math.floor(audioRef.current.duration % 60)
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        playStatus,
        play,
        pause,
        time,
        setTime,
        playWithId,
        previous,
        next,
        seekSong
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

    const {
        track,
        seekBar,
        seekBg,
        playStatus,
        play,
        pause,
        time,
        previous,
        next,
        seekSong
    } = useContext(PlayerContext);

    const format = (num) => String(num || 0).padStart(2, '0');

    return (
        <div className='fixed bottom-0 left-0 w-full h-[10%] bg-black text-white flex items-center px-4'>

            <div className='items-center hidden gap-4 lg:flex'>
                <img className='w-12' src={track?.image} alt="" />
                <div>
                    <p>{track?.name}</p>
                    <p>{track?.desc?.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-1 m-auto'>

                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />

                    {playStatus ? (
                        <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                    ) : (
                        <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    )}

                    <img onClick={next } className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>

                <div className='flex items-center gap-5'>
                    <p>
                        {format(time?.currentTime?.minute)}:
                        {format(time?.currentTime?.second)}
                    </p>

                    <div
                        onClick={seekSong}
                        ref={seekBg}
                        className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'
                    >
                        <hr
                            ref={seekBar}
                            className='w-0 h-1 bg-green-800 border-none rounded-full'
                        />
                    </div>

                    <p>
                        {format(time?.totalTime?.minute)}:
                        {format(time?.totalTime?.second)}
                    </p>
                </div>
            </div>

            <div className='items-center hidden gap-2 opacity-75 lg:flex'>
                <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="" />

                <div className='w-20 h-1 rounded bg-slate-50'></div>

                <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    );
};

export default Player;
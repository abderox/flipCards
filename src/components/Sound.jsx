
import Sound from 'react-sound';
import sound from '../../public/sound.mp3';

const  Sound_ =({isPlaying,handleSongLoading,handleSongPlaying,handleSongFinishedPlaying}) =>{
  return (
    <Sound
      url={sound}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOP}
      playFromPosition={300}
      onLoading={handleSongLoading}
      onPlaying={handleSongPlaying}
      onFinishedPlaying={handleSongFinishedPlaying}
      loop={true}
    />
  )
}

export default Sound_
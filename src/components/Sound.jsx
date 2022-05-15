
import Sound from 'react-sound';
import sound from '../../public/sounds.mp3';
import tada from '../../public/tada.mp3';
const  Sound_ =({isPlaying,success}) =>{
  return (
    <Sound
      url={success ? tada : sound}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
      playFromPosition={0}
      
    />
  )
}

export default Sound_
import { useEffect, useState } from 'react';
import { PolySynth } from 'tone';

interface TonePlayerProps {
  tones: string[];
  muted: boolean;
}

const synth = new PolySynth().toDestination();

const TonePlayer: React.FC<TonePlayerProps> = ({ tones, muted }) => {
  const [lastPlaying, setLastPlaying] = useState<string[]>([]);

  const stopTones = (toStop: string[]) => {
    toStop.forEach((tone) => synth.triggerRelease(tone));
  };

  const startTones = (toStart: string[]) => {
    toStart.forEach((tone) => synth.triggerAttack(tone));
  };

  useEffect(() => {
    synth.context.resume().then(() => {
      stopTones(lastPlaying.filter((tone) => !tones.includes(tone)));
      startTones(tones.filter((tone) => !lastPlaying.includes(tone)));
      // The intersection of next and previous keeps playing

      setLastPlaying(tones);

      synth.volume.value = muted ? -Infinity : 0 /* db */;
    });
  }, [tones, muted, lastPlaying]);

  return <></>;
};

export default TonePlayer;

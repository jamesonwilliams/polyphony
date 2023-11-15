import { useEffect, useState, useRef } from 'react';
import { PolySynth } from 'tone';

export default function TonePlayer({
  tones,
  muted,
}: {
  tones: string[];
  muted: boolean;
}) {
  const [lastPlaying, setLastPlaying] = useState<string[]>([]);
  const synthRef = useRef<PolySynth | null>(null);

  // Once on component mount
  useEffect(() => {
    synthRef.current = new PolySynth().toDestination();
    return () => {
      synthRef.current?.dispose();
      synthRef.current = null;
    };
  }, []);

  // Whenever the props/state change
  useEffect(() => {
    const stopTones = () => {
      const removedTones = lastPlaying.filter((tone) => !tones.includes(tone));
      removedTones.forEach((tone) => synthRef.current?.triggerRelease(tone));
    };

    const startTones = () => {
      const addedTones = tones.filter((tone) => !lastPlaying.includes(tone));
      addedTones.forEach((tone) => synthRef.current?.triggerAttack(tone));
    };

    const synth = synthRef.current;
    if (synth === null) return;

    synth.context.resume().then(() => {
      stopTones();
      startTones();
      setLastPlaying(tones);
      synth.volume.value = muted ? -Infinity : 0 /* db */;
    });
  }, [tones, muted, lastPlaying]);

  return <></>;
}

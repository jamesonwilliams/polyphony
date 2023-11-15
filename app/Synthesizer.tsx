'use client';

import TonePlayer from './TonePlayer';
import { useState } from 'react';
import ToneConfigurator from './tone_selector/ToneConfigurator';
import PlayerControls from './AudioControls';

export default function Synthesizer() {
  const [tones, setTones] = useState<string[]>([]);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  return (
    <div>
      <h1 className='title'>Polyphony</h1>
      <PlayerControls
        isMuted={isMuted}
        setMuted={setIsMuted}
        clearAll={() => setTones([])}
      />
      <ToneConfigurator tones={tones} onTonesChanged={setTones} />
      <TonePlayer tones={tones} muted={isMuted} />
    </div>
  );
}

import React from 'react';
import ConfiguredToneRow from './ConfiguredToneRow';
import ToneSelectorRow from './ToneSelectorRow';

export default function ToneConfigurator({
  tones,
  onTonesChanged,
}: {
  tones: string[];
  onTonesChanged: (tones: string[]) => void;
}) {
  return (
    <table className='min-w-full'>
      <tbody>
        {tones.map((tone) => (
          <ConfiguredToneRow
            key={tone}
            tone={tone}
            removeTone={(tone: string) =>
              onTonesChanged(tones.filter((t) => t != tone))
            }
          />
        ))}
        <ToneSelectorRow tones={tones} onTonesChanged={onTonesChanged} />
      </tbody>
    </table>
  );
}

import React from 'react';
import { availableOctaves } from './octaves';

export default function OctaveSelector({
  octave,
  octaveSelected,
}: {
  octave: number;
  octaveSelected: (octave: number) => void;
}) {
  return (
    <select
      name='octave'
      id='octave'
      value={octave}
      onChange={(e) => octaveSelected(parseInt(e.target.value))}
    >
      {availableOctaves.map((octave) => (
        <option key={octave} value={octave}>
          {octave}
        </option>
      ))}
    </select>
  );
}

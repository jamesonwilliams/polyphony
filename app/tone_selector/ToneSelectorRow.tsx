import { useState } from 'react';
import OctaveSelector from './OctaveSelector';
import NoteSelector from './NoteSelector';
import { availableOctaves, defaultOctave } from './octaves';
import { availableNotes, defaultNote } from './notes';

export default function ToneSelectorRow({
  tones,
  onTonesChanged,
}: {
  tones: string[];
  onTonesChanged: (tones: string[]) => void;
}) {
  const [octave, setOctave] = useState<number>(defaultOctave);
  const [note, setNote] = useState<string>(defaultNote);
  const newTone = `${note}${octave}`;

  const addNewTone = () => {
    if (!tones.includes(newTone)) {
      onTonesChanged([...tones, newTone]);
    }
  };

  let addButtonClasses: string = 'add-button min-w-full';
  if (tones.includes(newTone)) {
    addButtonClasses += ' disabled';
  }

  return (
    <>
      <tr key='new'>
        <td>
          <NoteSelector note={note} noteSelected={(note) => setNote(note)} />
        </td>

        <td>
          <OctaveSelector
            octave={octave}
            octaveSelected={(octave) => setOctave(octave)}
          />
        </td>
        <td>
          <button className={addButtonClasses} onClick={addNewTone}>
            Add
          </button>
        </td>
      </tr>
    </>
  );
}

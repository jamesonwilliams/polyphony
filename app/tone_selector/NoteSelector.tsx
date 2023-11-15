import { availableNotes } from './notes';

export default function NoteSelector({
  note,
  noteSelected,
}: {
  note: string;
  noteSelected: (note: string) => void;
}) {
  return (
    <select
      name='note'
      id='note'
      value={note}
      onChange={(e) => noteSelected(e.target.value)}
    >
      {availableNotes.map((note) => (
        <option key={note} value={note}>
          {note}
        </option>
      ))}
    </select>
  );
}

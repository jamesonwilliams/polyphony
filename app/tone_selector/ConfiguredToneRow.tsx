import React from 'react';

export default function ConfiguredToneRow({
  tone,
  removeTone,
}: {
  tone: string;
  removeTone: (tone: string) => void;
}) {
  return (
    <tr>
      <td>{tone}</td>
      <td>
        <button className='delete-button' onClick={() => removeTone(tone)}>
          Remove
        </button>
      </td>
    </tr>
  );
}

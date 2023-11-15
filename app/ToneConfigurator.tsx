import React from 'react';

interface ToneConfiguratorProps {
  tones: string[];
  onTonesChanged: (tones: string[]) => void;
}

const ToneConfigurator: React.FC<ToneConfiguratorProps> = ({
  tones,
  onTonesChanged,
}) => {
  const [newTone, setNewTone] = React.useState<string>('C4');

  const onToneTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTone(event.target.value.trim());
  };

  const addNewTone = () => {
    const tone = newTone.trim();
    if (tone != '' && !tones.includes(tone)) {
      onTonesChanged([...tones, tone]);
    }
  };

  const removeTone = (tone: string) => {
    onTonesChanged(tones.filter((t) => t != tone));
  };

  return (
    <table>
      <tbody>
        {tones.map((tone) => (
          <tr key={tone}>
            <td>{tone}</td>
            <td>
              <button
                className='delete-button'
                onClick={() => removeTone(tone)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
        <tr key='new'>
          <td>
            <input
              key='new'
              type='text'
              value={newTone}
              onChange={onToneTextChanged}
            />
          </td>
          <td>
            {!tones.includes(newTone) && (
              <button className='add-button' onClick={addNewTone}>
                Add
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ToneConfigurator;

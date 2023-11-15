interface AudioControlsProps {
  isMuted: boolean;
  setMuted: (muted: boolean) => void;
  clearAll: () => void;
}

const PlayerControls: React.FC<AudioControlsProps> = ({
  isMuted,
  setMuted,
  clearAll,
}) => {
  return (
    <>
      <button onClick={() => setMuted(!isMuted)}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>

      <button onClick={clearAll}>Clear all</button>
    </>
  );
};

export default PlayerControls;

export default function PlayerControls({
  isMuted,
  setMuted,
  clearAll,
}: {
  isMuted: boolean;
  setMuted: (muted: boolean) => void;
  clearAll: () => void;
}) {
  return (
    <>
      <button onClick={() => setMuted(!isMuted)}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>

      <button onClick={clearAll}>Clear all</button>
    </>
  );
}

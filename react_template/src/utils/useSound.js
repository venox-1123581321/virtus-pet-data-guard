import { useCallback, useRef } from 'react';

export function useSound(src) {
  const audioRef = useRef(null);
  if (!audioRef.current) {
    audioRef.current = new Audio(src);
  }
  return useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }, [src]);
}

"use client";

import { FeatureList } from "@/components/FeatureList";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

const PageContent = ({ songs }: any) => {
  const onPlay = useOnPlay(songs);
  const player = usePlayer();
  const { isPlaying, activeId, play, pause } = player;

  const togglePlay = (id: string) => {
    if (isPlaying && id === activeId) {
      if (pause) {
        pause();
      }
      player.setIsPlaying(!isPlaying);
      return;
    }

    onPlay(id);

    if (play) {
      play();
    }
    player.setIsPlaying(!isPlaying);
  };

  return <FeatureList songs={songs} togglePlay={togglePlay} />;
};

export default PageContent;

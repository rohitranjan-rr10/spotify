import usePlayer from "@/hooks/usePlayer";
import SongItem from "@/components/SongItem";

interface FeatureListProps {
  songs: any;
  togglePlay: (id: string) => void;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  songs,
  togglePlay,
}: any) => {
  const player = usePlayer();

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available</div>;
  }

  return (
    <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-5 
        gap-4 
        mt-4
      "
    >
      {songs.map((item: any) => (
        <SongItem
          onClick={(id: string) => togglePlay(item.id)}
          data={item}
          isActive={item.id === player.activeId}
          isPlaying={item.id === player.activeId && player.isPlaying}
          key={item.id}
        />
      ))}
    </div>
  );
};

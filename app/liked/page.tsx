import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div
          className="
              flex 
              flex-col 
              md:flex-row 
              gap-x-5
            "
        >
          <div className="flex flex-col gap-y-2 mt-0 md:mt-0">
            <h1 className="text-white text-3xl font-semibold">Liked Songs</h1>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;

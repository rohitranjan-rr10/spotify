import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { FaPause, FaPlay } from "react-icons/fa";

const SongItem = ({ isPlaying, onClick, data }: any) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
    >
      <div
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          By {data.author}
        </p>
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <button
          onClick={onClick}
          className="
            transition 
            opacity-0 
            rounded-full 
            flex 
            items-center 
            justify-center 
            bg-green-500 
            p-4 
            drop-shadow-md 
            translate
            translate-y-1/4
            group-hover:opacity-100 
            group-hover:translate-y-0
            hover:scale-110
            text-black
      "
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default SongItem;

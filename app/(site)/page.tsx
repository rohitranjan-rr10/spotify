import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  const getGreeting = () => {
    const hr = new Date().getHours();
    return `${
      hr < 12
        ? "Good morning"
        : hr < 17
        ? "Good afternoon"
        : hr < 21
        ? "Good evening"
        : "Welcome back"
    }`;
  };

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
      <Header>
        <div className="mb-2">
          <h1
            className="
            text-white 
              text-3xl 
              font-semibold
            "
          >
            {getGreeting()}
          </h1>
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
            <ListItem
              name="Liked Songs"
              image="/images/liked.png"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Fresh new music</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}

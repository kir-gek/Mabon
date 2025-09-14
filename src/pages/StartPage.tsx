import { Link } from "react-router-dom";
import { useRootStore } from "../store/useStores";
import type { artistModel } from "../types/ArtistModel";
import { observer } from "mobx-react-lite";

export const StartPage: React.FC = observer(() => {
  const { artistStore } = useRootStore();
  return (
       <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {artistStore.artists?.map((artist: artistModel) => {
        const imgArtistSrc = `../../exampleImages/artists/${artist?.img}`;
        return  (
            <Link key= {artist.id} to={`/artist/${artist.id}`} className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200">
              <img
                src={imgArtistSrc}
                alt={`${artist.name} ${artist.surname}`}
                className="w-full h-80 object-cover object-top"
              />
               <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {artist.name} {artist.surname}
              </h3>
            </div>
            </Link>
        );
      })}
    </div>
  );
});

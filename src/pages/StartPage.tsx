import { Link } from "react-router-dom";
import { useRootStore } from "../store/useStores";
import type { artistModel } from "../types/ArtistModel";
import { observer } from "mobx-react-lite";

export const StartPage: React.FC = observer(() => {
  const { artistStore } = useRootStore();
  return (
    <>
      {artistStore.artists?.map((artist: artistModel) => (
        <div>
          <Link to= {`/artist/${artist.id}`}>
          {artist.name} {artist.surname}
          </Link>
        </div>
      ))}
    </>
  );
});

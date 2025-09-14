import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../store/useStores";
import { useEffect } from "react";
import type { pictureModel } from "../types/ArtistModel";

export const Artist: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? Number(id) : 0;
  const { artistStore } = useRootStore();

  useEffect(() => {
    artistStore.setSelectedArtist(numericId);
  }, []);
  const artist = artistStore.selectedArtist;

  const imgArtistSrc = `../../exampleImages/artists/${artist?.img}`;
  const getImgPictureSrc = (path: string) =>
    `../../exampleImages/pictures/${path}`;

  if (!artist) {
    return <div>Художник не найден</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {artist.name} {artist.surname}
      </h1>
      {artist.img ? (
        <img
          src={imgArtistSrc}
          alt={`${artist.name} ${artist.surname}`}
          className="w-50 h-auto rounded-lg mb-6 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-6">
          <span className="text-gray-500">Нет изображения</span>
        </div>
      )}
      <h2>Работы художника</h2>
      {artistStore.selectedPictures?.map((picture: pictureModel) => (
        <div>
          {picture.title}
          <img
            src={getImgPictureSrc(picture.img ? picture.img : "")}
            alt={`${picture.title}`}
            className="w-50 h-auto rounded-lg mb-6 object-cover"
          />
          <p>{picture.price} рублей</p>
        </div>
      ))}
    </div>
  );
});

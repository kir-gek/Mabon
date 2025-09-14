import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../store/useStores";
import { useEffect, useState } from "react";
import type { pictureModel } from "../types/ArtistModel";

export const Artist: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? Number(id) : 0;
  const { artistStore, basketStore } = useRootStore();

  useEffect(() => {
    artistStore.setSelectedArtist(numericId);
  }, []);
  const artist = artistStore.selectedArtist;
  const selectedPictures = artistStore.selectedPictures;

  const imgArtistSrc = `../../exampleImages/artists/${artist?.img}`;
  const getImgPictureSrc = (path: string) =>
    `../../exampleImages/pictures/${path}`;
  const [justAddedId, setJustAddedId] = useState<number | null>(null);

  const handleAdd = (pictureId: number) => {
    basketStore.addPictureToBasket(pictureId);
    setJustAddedId(pictureId);
    // Можно сбросить статус через таймаут
    setTimeout(() => {
      setJustAddedId(null);
    }, 500);
  };

  if (!artist) {
    return <div className="p-4 text-red-600">Художник не найден</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">
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
      <h2 className="text-2xl font-medium mb-4 text-gray-700">
        Работы художника
      </h2>
      <div className="space-y-8">
        {selectedPictures.length === 0 ? (
          <div className="text-gray-500">У художника нет работ</div>
        ) : (
          selectedPictures.map((picture) => {
            const isAdded = basketStore.picturesInBasket.some(
              (p) => p.id === picture.id
            );
            return (
              <div
                key={picture.id}
                className="border rounded-lg p-4 flex flex-col items-start bg-gray-50"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {picture.title}
                </h3>
                {picture.img ? (
                  <img
                    src={getImgPictureSrc(  picture.img)}
                    alt={picture.title}
                    className="w-20 h-auto rounded-lg mb-2 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-2">
                    <span className="text-gray-500">Нет картинки</span>
                  </div>
                )}
                <p className="text-gray-600 mb-4">{picture.price} рублей</p>
                <button
                  onClick={() => handleAdd(picture.id)}
                  className={`px-4 py-2 rounded ${
                    isAdded
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  disabled={isAdded}
                >
                  {isAdded
                    ? "Уже в корзине"
                    : justAddedId === picture.id
                    ? "Добавлено!"
                    : "Добавить в корзину"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
});

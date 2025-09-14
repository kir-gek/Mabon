import { observer } from "mobx-react-lite";
import { useRootStore } from "../store/useStores";

export const Basket: React.FC = observer(() => {
  const { basketStore } = useRootStore();

  const getImgPictureSrc = (path: string) =>
    `../../exampleImages/pictures/${path}`;

  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow mt-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Корзина</h1>

      {basketStore.picturesInBasket.length === 0 ? (
        <p className="text-gray-500">Ваша корзина пуста</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {basketStore.picturesInBasket.map((pic) => (
            <div
              key={pic.id}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <img
                src={getImgPictureSrc(pic.img ? pic.img : "")}
                alt={pic.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-700">
                  {pic.title}
                </h3>
                <p className="text-gray-500 mb-2">{pic.price} ₽</p>
                <button
                  onClick={() => basketStore.removeFromBasket(pic.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

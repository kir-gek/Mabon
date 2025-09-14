import { useRootStore } from "../store/useStores";

export const Basket: React.FC = () => {
  const { basketStore } = useRootStore();

  return (
    <>
      <h1>Корзина</h1>
      {basketStore.picturesInBasket.map((pic) => (
        <div>{pic.title}</div>
      ))}
    </>
  );
};

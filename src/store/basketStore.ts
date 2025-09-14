import { makeAutoObservable } from "mobx";
import type { pictureModel } from "../types/ArtistModel";
import type { RootStore } from "./rootStore";

export default class BasketStore {

    private _picturesInBasket: pictureModel[] = []

    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }
    addPictureToBasket(id: number) {
        const { pictures } = this.rootStore.artistStore;  // доступ к полному списку картин
        if (!pictures) return;

        const picture = pictures.find(pic => pic.id === id);
        if (!picture) return;

        // Можно также проверить, что эта картина ещё не в корзине, чтобы не дублировать
        const alreadyAdded = this._picturesInBasket.some(pic => pic.id === id);
        if (alreadyAdded) {
            return;  // возможно показать уведомление или что-то
        }

        this._picturesInBasket.push(picture)

    }

    removeFromBasket(id: number) {
        this._picturesInBasket= this._picturesInBasket?.filter((picture) => (picture.id != id))
    }

    get picturesInBasket() {
        return this._picturesInBasket
    }

}
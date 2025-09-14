import ArtistStore from "./artistStore";
import BasketStore from "./basketStore";

export class RootStore {
    artistStore: ArtistStore;
    basketStore: BasketStore;
    constructor() {
        this.artistStore = new ArtistStore(this);
        this.basketStore = new BasketStore(this);
    }
}

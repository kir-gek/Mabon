import { makeAutoObservable } from "mobx";
import type { artistModel, pictureModel } from "../types/ArtistModel";
import { exampleArtists, examplePicturesState } from "./examplesState";
import type { RootStore } from "./rootStore";

export default class ArtistStore {
    private _artists: artistModel[]  = exampleArtists
    private _selectedArtist: artistModel | null = null
    private _pictures: pictureModel[]  = examplePicturesState
    private _selectedPictures: pictureModel[]  = []

    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }
    setSelectedArtist(numericId: number) {
        if (!this._artists) {
            this._selectedArtist = null;
            return;
        }
        this._selectedArtist = this._artists.find((artist: artistModel) => artist.id === numericId) || null;
        this._selectedPictures = this._pictures?.filter((picture: pictureModel) => picture.atristId === numericId) || null;
    }
    resetSelectedArtist() {
        this._selectedArtist = null
    }
    get artists() {
        return this._artists
    }
    get selectedArtist() {
        return this._selectedArtist
    }
    get pictures() {
        return this._pictures
    }
    get selectedPictures() {
        return this._selectedPictures
    }
}
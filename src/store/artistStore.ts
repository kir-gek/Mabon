import { makeAutoObservable } from "mobx";
import type { artistModel, pictureModel } from "../types/ArtistModel";
import { exampleArtists, examplePicturesState } from "./examplesState";
import type { RootStore } from "./rootStore";

export default class ArtistStore {
    private _artists: artistModel[] | null = exampleArtists
    private _selectedArtist: artistModel | null = null
    private _pictures: pictureModel[] | null = examplePicturesState

    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }
    setSelectedArtist(selectedArtist: artistModel) {
        this._selectedArtist = selectedArtist
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
}
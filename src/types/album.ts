export interface IAlbum {
    id?: number
    name: string
    description: string
    Photos?: any[]
}

export interface AlbumState {
    albums: IAlbum[]
    loading: boolean
    error: null | string
}


export enum AlbumActionTypes {
    FETCH_ALBUMS = 'FETCH_TODOS',
    FETCH_ALBUMS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_ALBUMS_ERROR = 'FETCH_TODOS_ERROR',
    SAVE_ALBUM = 'SAVE_ALBUM',
    SAVE_ALBUM_SUCCESS = 'SAVE_ALBUM_SUCCESS',
    SAVE_ALBUM_ERROR = 'SAVE_ALBUM_ERROR',
    UPDATE_ALBUM = 'UPDATE_ALBUM',
    UPDATE_ALBUM_SUCCESS = 'UPDATE_ALBUM_SUCCESS',
    UPDATE_ALBUM_ERROR = 'UPDATE_ALBUM_ERROR',
    DELETE_ALBUM = 'DELETE_ALBUM',
    DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS',
    DELETE_ALBUM_ERROR = 'DELETE_ALBUM_ERROR',
    DELETE_PHOTO = 'DELETE_PHOTO',
    DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS',
    DELETE_PHOTO_ERROR = 'DELETE_PHOTO_ERROR',
    SET_ALBUM = 'SET_ALBUM',
    FETCH_IMAGE = 'FETCH_IMAGE',
    FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS',
    FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR'
}

interface FetchAlbumAction {
    type: AlbumActionTypes.FETCH_ALBUMS
}

interface FetchImageFromAlbum {
    type: AlbumActionTypes.FETCH_IMAGE
    payload: string
}

interface FetchImageFromAlbumSuccess {
    type: AlbumActionTypes.FETCH_IMAGE_SUCCESS
    payload: any
}

interface FetchImageFromAlbumError {
    type: AlbumActionTypes.FETCH_IMAGE_ERROR
    payload: string
}

interface SaveAlbum {
    type: AlbumActionTypes.SAVE_ALBUM
    payload: IAlbum
}

interface SaveAlbumSuccess {
    type: AlbumActionTypes.SAVE_ALBUM_SUCCESS
    payload: IAlbum[]
}

interface SaveAlbumError {
    type: AlbumActionTypes.SAVE_ALBUM_ERROR
    payload: string
}


interface UpdateAlbum {
    type: AlbumActionTypes.UPDATE_ALBUM
    payload: IAlbum
}

interface UpdateAlbumSuccess {
    type: AlbumActionTypes.UPDATE_ALBUM_SUCCESS
    payload: IAlbum[]
}

interface UpdateAlbumError {
    type: AlbumActionTypes.UPDATE_ALBUM_ERROR
    payload: string
}

interface FetchAlbumActionSuccess {
    type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS
    payload: IAlbum[]
}

interface FetchAlbumActionError {
    type: AlbumActionTypes.FETCH_ALBUMS_ERROR
    payload: string
}

interface SetAlbum {
    type: AlbumActionTypes.SET_ALBUM
    payload: IAlbum[]
}


interface DeleteAlbum {
    type: AlbumActionTypes.DELETE_ALBUM
}

interface DeleteAlbumSuccess {
    type: AlbumActionTypes.DELETE_ALBUM_SUCCESS
    payload: IAlbum[]
}

interface DeleteAlbumError {
    type: AlbumActionTypes.DELETE_ALBUM_ERROR
    payload: string
}


interface DeletePhoto {
    type: AlbumActionTypes.DELETE_PHOTO
}

interface DeletePhotoSuccess {
    type: AlbumActionTypes.DELETE_PHOTO_SUCCESS
}

interface DeletePhotoError {
    type: AlbumActionTypes.DELETE_PHOTO_ERROR
    payload: string
}


export type AlbumAction =
    FetchAlbumAction
    | FetchAlbumActionSuccess
    | FetchAlbumActionError
    | SetAlbum
    | FetchImageFromAlbum
    | FetchImageFromAlbumSuccess
    | FetchImageFromAlbumError
    | SaveAlbum
    | SaveAlbumSuccess
    | SaveAlbumError
    | UpdateAlbum
    | UpdateAlbumSuccess
    | UpdateAlbumError
    | DeleteAlbum
    | DeleteAlbumSuccess
    | DeleteAlbumError
    | DeletePhoto
    | DeletePhotoSuccess
    | DeletePhotoError
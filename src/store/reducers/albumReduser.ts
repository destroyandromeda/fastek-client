import {AlbumAction, AlbumActionTypes, AlbumState} from "../../types/album";


const initialState: AlbumState = {
    albums: [],
    loading: false,
    error: null
}
export const albumReducer = (state: AlbumState = initialState, action: AlbumAction): AlbumState => {
    switch (action.type) {
        case AlbumActionTypes.FETCH_ALBUMS:
            return {...state, loading: true}
        case AlbumActionTypes.FETCH_ALBUMS_SUCCESS:
            return {...state, loading: false, albums: action.payload}
        case AlbumActionTypes.FETCH_ALBUMS_ERROR:
            return {...state, loading: false, error: action.payload}
        case AlbumActionTypes.SET_ALBUM:
            return {...state, albums: action.payload}
        case AlbumActionTypes.SAVE_ALBUM:
            return {...state}
        case AlbumActionTypes.SAVE_ALBUM_SUCCESS:
            return {...state, albums: action.payload}
        case AlbumActionTypes.SAVE_ALBUM_ERROR:
            return {...state, error: action.payload}
        case AlbumActionTypes.UPDATE_ALBUM:
            return {...state}
        case AlbumActionTypes.UPDATE_ALBUM_SUCCESS:
            return {...state, albums: action.payload}
        case AlbumActionTypes.UPDATE_ALBUM_ERROR:
            return {...state, error: action.payload}
        case AlbumActionTypes.DELETE_ALBUM:
            return {...state, loading: true}
        case AlbumActionTypes.DELETE_ALBUM_SUCCESS:
            return {...state, loading: false, albums: action.payload}
        case AlbumActionTypes.DELETE_ALBUM_ERROR:
            return {...state, loading: false, error: action.payload}
        case AlbumActionTypes.DELETE_PHOTO:
            return {...state}
        case AlbumActionTypes.DELETE_PHOTO_SUCCESS:
            return {...state}
        case AlbumActionTypes.DELETE_PHOTO_ERROR:
            return {...state}
        default:
            return state
    }
}
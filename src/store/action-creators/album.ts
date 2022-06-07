import {Dispatch} from "redux";
import axios from "axios";
import {AlbumAction, AlbumActionTypes, IAlbum} from "../../types/album";
import {env} from "../../config";

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            dispatch({type: AlbumActionTypes.FETCH_ALBUMS})
            const response = await axios.get(`${env.src}/album`)
            const {data} = response.data
            dispatch({type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: AlbumActionTypes.FETCH_ALBUMS_ERROR, payload: 'error fetch todos'})
        }
    }
}

export const saveAlbum = (album: IAlbum) => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            let formData = new FormData();
            if (album.Photos) {
                album.Photos.map((photo) => {
                    formData.append('photos', photo);
                })
            }
            formData.append('info', JSON.stringify(album))
            dispatch({type: AlbumActionTypes.SAVE_ALBUM, payload: album})
            const response = await axios.post(`${env.src}/album`, formData)
            const {data} = response.data
            dispatch({type: AlbumActionTypes.SAVE_ALBUM_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: AlbumActionTypes.SAVE_ALBUM_ERROR, payload: 'error fetch todos'})
        }
    }
}

export const updateAlbum = (album: IAlbum) => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            let formData = new FormData();
            if (album.Photos) {
                album.Photos.map((photo) => {
                    if (photo.size) formData.append('photos', photo);
                })
            }
            formData.append('info', JSON.stringify(album))
            dispatch({type: AlbumActionTypes.SAVE_ALBUM, payload: album})
            const response = await axios.put(`${env.src}/album/` + album.id, formData)
            const {data} = response.data
            dispatch({type: AlbumActionTypes.SAVE_ALBUM_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: AlbumActionTypes.SAVE_ALBUM_ERROR, payload: 'error fetch todos'})
        }
    }
}

export const deleteAlbum = (id: number) => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            dispatch({type: AlbumActionTypes.DELETE_ALBUM})
            const response = await axios.delete(`${env.src}/album/` + id)
            const {data} = response.data
            dispatch({type: AlbumActionTypes.DELETE_ALBUM_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: AlbumActionTypes.DELETE_ALBUM_ERROR, payload: 'error fetch todos'})
        }
    }
}

export const deletePhoto = (id: number) => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            dispatch({type: AlbumActionTypes.DELETE_PHOTO})
            const response = await axios.delete(`${env.src}/photo/` + id)
            dispatch({type: AlbumActionTypes.DELETE_PHOTO_SUCCESS})
        } catch (e) {
            dispatch({type: AlbumActionTypes.DELETE_PHOTO_ERROR, payload: 'error fetch todos'})
        }
    }
}


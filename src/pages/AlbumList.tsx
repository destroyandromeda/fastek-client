import {useEffect, useState} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction"
import {Col, ListGroup, Row} from "react-bootstrap";
import {Album} from "./Album";
import {IAlbum} from "../types/album";
import {deleteAlbum} from "../store/action-creators/album";

export const AlbumList = () => {
    const {albums, loading, error} = useTypedSelector(state => state.album)
    const [selectedAlbum, setSelectedAlbum] = useState<number | null>()
    const {fetchAlbums, deleteAlbum} = useAction()

    useEffect(() => {
        fetchAlbums()
    }, [])


    if (loading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    if (error) {
        return (
            <>
                <h1>{error}...</h1>
            </>
        )
    }


    const addBtnHandler = () => {
        setSelectedAlbum(null)
    }

    const handleDelAlbum = (id: number) => {
        deleteAlbum(id)
    }

    const renderDel = (id: number | undefined) => {
        if (id) {
            return (
                <span style={{
                    position: 'absolute',
                    right: 10,
                    color: 'red',
                    cursor: 'pointer'
                }} onClick={() => handleDelAlbum(id)}>x</span>
            )
        }
        return (<span></span>)
    }

    return (
        <>
            <br/>
            <Row>
                <Col md={3}>
                    <ListGroup style={{maxHeight: "90vh", overflow: 'auto'}}>
                        {
                            albums.map(album =>
                                <ListGroup.Item
                                    key={album.id}
                                    onClick={() => setSelectedAlbum(album.id)}
                                    active={selectedAlbum === album.id}
                                    style={{cursor: 'pointer', position: 'relative'}}
                                >
                                    <span>{album.name}</span>
                                    {renderDel(album.id)}
                                </ListGroup.Item>
                            )
                        }

                    </ListGroup>
                    <br/>
                    <ListGroup>
                        <ListGroup.Item
                            variant="success"
                            onClick={addBtnHandler}
                            style={{cursor: 'pointer'}}
                            disabled={!selectedAlbum}
                        >
                            Add new album
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>

                    <Album album={albums.filter(album => selectedAlbum === album.id)[0]}/>

                </Col>
            </Row>
        </>
    )
}
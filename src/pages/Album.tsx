import {IAlbum} from "../types/album"
import {FormEvent, useEffect, useState} from "react"
import {Button, Container, Form} from "react-bootstrap"
import {UploadForm} from "./UploadForm"
import {Paperclip} from "react-bootstrap-icons"
import {useAction} from "../hooks/useAction"

interface IProps {
    album?: IAlbum
}

export const Album = ({album}: IProps) => {

    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [photos, setPhotos] = useState<any[]>([])
    const [toDeletePhoto, setToDeletePhoto] = useState<any[]>([])

    const [show, setShow] = useState(false)


    const {saveAlbum, updateAlbum, deletePhoto} = useAction()


    useEffect(() => {
        if (album) {
            setName(album.name)
            setDescription(album.description)
            if (album.Photos) setPhotos(album.Photos)
        } else {
            setName("")
            setDescription("")
            setPhotos([])
        }
    }, [album])

    const changeNameHandler = (val: any) => {
        const {value} = val.target
        setName(value)
    }

    const changeDescriptionHandler = (val: any) => {
        const {value} = val.target
        setDescription(value)
    }


    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (toDeletePhoto.length) {
            toDeletePhoto.map(async (toDel) => {
                if (toDel.id) await deletePhoto(toDel.id)
            })
        }
        if (album?.id) {
            updateAlbum({...album, name, description, Photos: photos})
        } else {
            saveAlbum({...album, name, description, Photos: photos})
        }
    }

    const clip = () => {
        return (
            <Button
                style={{
                    position: "absolute",
                    top: 0,
                    right: -25,
                    border: "2px solid lightgray",
                    borderRadius: 50,
                    padding: 5
                }}
                disabled={!name || !description}
                onClick={() => setShow(true)}
            >
                <Paperclip size={'30px'} cursor={'pointer'}/>
            </Button>
        )
    }

    return (
        <Container>
            <Container style={{position: "relative"}}>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={changeNameHandler}
                            type="text"
                            placeholder="Enter name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Album description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={changeDescriptionHandler}
                            type="text"
                            placeholder="Enter description"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{width: '100%'}}>
                        Save
                    </Button>
                </Form>
                {clip()}
            </Container>

            <UploadForm
                show={show}
                setShow={setShow}
                Photos={photos}
                setPhotos={setPhotos}
                toDeletePhoto={toDeletePhoto}
                setToDeletePhoto={setToDeletePhoto}
            />
        </Container>
    )
}
import {Button, Modal, Stack} from "react-bootstrap";
import {FormEvent, SetStateAction, useRef, useState} from "react"
import {Backspace} from "react-bootstrap-icons"
import axios from "axios";
import {useAction} from "../hooks/useAction"
import {env} from "../config";

interface IProp {
    Photos: any[]
    show: boolean
    setShow: (value: SetStateAction<boolean>) => void
    setPhotos: (value: SetStateAction<any[]>) => void
    toDeletePhoto: any[]
    setToDeletePhoto: (value: SetStateAction<any[]>) => void
}


export const UploadForm = ({Photos, show, setShow, setPhotos, toDeletePhoto, setToDeletePhoto}: IProp) => {

    const inputUpdate = useRef<HTMLInputElement>(null)

    const {deletePhoto} = useAction()

    const handleClose = () => setShow(false);

    const handleImageChange = async (event: FormEvent<HTMLInputElement>) => {
        const files = inputUpdate.current?.files;
        if (files) {
            if (Photos.length > 1) {
                setPhotos((Photos) => [...Array.from(files).map(file => file), ...Photos])
            } else {
                setToDeletePhoto(Photos)
                setPhotos(Array.from(files).map(file => file))
            }
        }
    }

    const handleAdd = () => {
        inputUpdate?.current?.click()
    }

    const handleClickDeleteFile = (file: any, idx: number) => {
        if (file?.id) {
            deletePhoto(file.id)
        }
        setPhotos([
            ...Photos.slice(0, idx),
            ...Photos.slice(idx + 1)
        ])
    }

    const separator = (idx: number, length: number) => {
        if (idx !== length - 1) {
            return ';'
        }
        return ''
    }

    const separatorContainer = (idx: number, length: number) => {
        return (
            <span style={{paddingTop: 5, paddingBottom: 5}}>
                {separator(idx, length)}
            </span>
        )
    }

    const handleDownload = async (name: string) => {
        //хак, мне было лень делать через redux
        let {data} = await axios.get(`${env.src}/photo/` + name)
        let a = document.createElement("a")
        a.href = data.data
        a.download = name
        a.click()
    }

    const fileSave = (file: any) => {
        if (file.albumId) {
            return <a href={'#'} onClick={() => handleDownload(file.name)}>{file.name}</a>
        }
        return <span>{file.name}</span>
    }

    const photosListContainer = () => {
        if (Photos.length > 0) {
            return (
                <div style={{wordBreak: "break-word", display: "flex"}}>
                    <p>
                        {
                            Photos.map((file, idx) =>
                                <span key={idx} style={{padding: 5, width: '100%'}}>
                                    {fileSave(file)}
                                    <span style={{paddingLeft: 5, cursor: 'pointer'}}
                                          onClick={() => handleClickDeleteFile(file, idx)}>
                                        <Backspace/>
                                    </span>
                                    {separatorContainer(idx, Photos.length)}
                                </span>
                            )
                        }
                    </p>
                </div>
            )
        }
        return (
            <div>
                <p>Files not upload...</p>
            </div>
        )
    }

    return (
        <Modal show={show} onHide={handleClose} size={'xl'}>
            <Modal.Header closeButton>
                <Modal.Title>Photos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    id="Photos"
                    accept="image/*"
                    type="file"
                    ref={inputUpdate}
                    onInput={handleImageChange}
                    multiple
                    hidden={true}
                />

                <div style={{width: '100%'}}>
                    {photosListContainer()}
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Stack direction="horizontal" gap={2} style={{width: '100%'}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="success" onClick={handleAdd} className="ms-auto">
                        Choose Photos
                    </Button>
                </Stack>

            </Modal.Footer>
        </Modal>
    )
}
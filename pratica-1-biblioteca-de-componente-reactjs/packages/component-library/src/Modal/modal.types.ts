import {ReactNode} from 'react'

export interface ModalStyle {
    background: string
    color: string
}

export default interface ModalProps {
    isOpen:boolean
    setModal: ()=> void
    children ?: ReactNode | ReactNode[]
    title: string
    style: ModalStyle
}



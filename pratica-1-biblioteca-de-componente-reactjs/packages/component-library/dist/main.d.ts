/// <reference types="react" />

import { JSX as JSX_2 } from 'react/jsx-runtime';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';

export declare const Button: React.FC<ButtonProps>;

declare type ButtonProps = {
    caption: string;
    onClick: () => void;
};

export declare const Checkbox: (props: CheckboxProps) => JSX_2.Element;

export declare const CheckboxGroup: (props: CheckboxGroupProps) => JSX_2.Element;

declare type CheckboxGroupElement = {
    descricao: string;
    name?: string;
};

declare interface CheckboxGroupProps extends CheckboxGroupStyleProps {
    titulo: string;
    elementos: CheckboxGroupElement[];
}

declare interface CheckboxGroupStyleProps {
    fontsize?: string;
}

declare interface CheckboxProps extends CheckboxStyleProps {
    label: string;
    name?: string;
}

declare interface CheckboxStyleProps {
    fontsize?: string;
}

export declare const Dropdawn: React.FC;

export declare const LayoutSplitter: (props: SplitterContainerProps) => JSX_2.Element;

export declare const Modal: React_2.FC<ModalProps>;

declare interface ModalProps {
    isOpen: boolean;
    setModal: () => void;
    children?: ReactNode | ReactNode[];
    title: string;
    style: ModalStyle;
}

declare interface ModalStyle {
    background: string;
    color: string;
}

declare interface SplitterContainerProps extends SplitterContainerStyleProps {
    children: [ReactNode, ReactNode];
}

declare interface SplitterContainerStyleProps extends SplitterContextProps {
    splitterpercent: number;
    backgroundcolor?: string;
    color?: string;
    style?: React.CSSProperties;
}

declare interface SplitterContextProps {
    orientacao: SplitterDirection;
}

export declare enum SplitterDirection {
    Vertical = 0,
    Horizontal = 1
}

export declare const SplitterPanel: (props: SplitterPanelProps) => JSX_2.Element;

declare interface SplitterPanelProps extends SplitterPanelStyleProps {
    children?: ReactNode;
}

declare interface SplitterPanelStyleProps {
    backgroundcolor?: string;
    color?: string;
    padding?: string;
}

export { }

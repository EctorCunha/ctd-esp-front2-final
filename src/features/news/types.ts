export interface INoticiasNormalizadas {
    id: number;
    title: string;
    description: string;
    date: number | string;
    premium: boolean;
    image: string;
    descriptionCurto?: string;
  }

export interface INoticias {
    id: number;
    title: string;
    description: string;
    date: Date;
    premium: boolean;
    image: string;
}

export interface IModalProps {
    title: string;
    description: string;
    premium: boolean;
    image: string;
    handleModal?: React.MouseEventHandler;
    handleModalSubscription?: React.MouseEventHandler | undefined;
    buttonName?: string;
  }

export interface INewsProps {
    image: string;
    title: string;
    date: number | string;
    descriptionCurto?: string;
    handleBtn: React.MouseEventHandler;
  }
import React from 'react'
import { Botao } from './styled'

interface IButtonProps {
  arialabel?: string;
  primaryBtn: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function QuoteButton({ arialabel, primaryBtn, onClick }: IButtonProps) {
  return (
    <>
      {primaryBtn === true
        ?
        <Botao
          aria-label={arialabel ? "Obter citação" : "Obter citação aleatória"}
          onClick={onClick}
        >
          {arialabel ? "Obter citação" : "Obter citação aleatória"}
        </Botao>
        :
        <Botao
          secondary={true}
          onClick={onClick}>
          Apagar
        </Botao>
      }
    </>
  )
}
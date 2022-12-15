import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import { Container, ButtonContainer, Image, Name, Description, Button } from "./styled";

export function Bio() {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) => setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <Button
        isActive={bioActive.id === nome ? true : false}
        onClick={() => onClick(nome as NomesSimpsons)}
      >
        {nome}
      </Button>
    ));
  };

  return (
    <Container >
      <ButtonContainer>{criarBotoes()}</ButtonContainer>
      <div>
        <div>
          <Image
            src={bioActive.image}
            alt={bioActive.nome}
          />
        </div>
        <div>
          <Name>{bioActive.nome}</Name>
          <Description>{bioActive.description}</Description>
        </div>
      </div>
    </Container>
  );
};
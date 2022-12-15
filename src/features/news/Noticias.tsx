import { useEffect, useState } from "react";
import { AssinarImage } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { Modal } from "./Modal";
import { Card } from "./Card";
import { Container, NewsList, Title } from "./styled";
import { INoticiasNormalizadas } from "./types";

export const Noticias = () => {
  const [newsInfo, setNewsInfo] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  // Principio de responsabilidade única
  // Esse componente foi dividido em 3 componentes (Noticias, Card e Modal)

  const obterInformacoes = async () => {
    const resposta = await obterNoticias();

    const data = resposta.map((data) => {
      const title = data.title
        .split(" ")
        .map((str: string) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");

      const hora = new Date();
      const minutosDecorrido = Math.floor(
        (hora.getTime() - data.date.getTime()) / 60000
      );

      return {
        id: data.id,
        title,
        description: data.description,
        date: `Faz ${minutosDecorrido} minutos`,
        premium: data.premium,
        image: data.image,
        descriptionCurto: data.description.substring(0, 100),
      };
    });
    setNewsInfo(data);
  };

  useEffect(() => {
    obterInformacoes();
  }, []);

  return (
    <Container>
      <Title>Notícias dos Simpsons</Title>
      <NewsList>
        {newsInfo.map((news) => (
          <Card
            key={news.id}
            image={news.image}
            title={news.title}
            date={news.date}
            descriptionCurto={news.descriptionCurto}
            handleBtn={() => setModal(news)}
          />
        ))}

        {modal ? (
          modal.premium ? (
            <Modal
              image={AssinarImage}
              title="Asine a newsletter"
              description="Assine nossa newsletter e receba novidades de nossos personagens favoritos"
              premium={true}
              handleModal={() => setModal(null)}
              handleModalSubscription={() =>
                setTimeout(() => {
                  alert("Inscrito com sucesso. Agora nós deve $ 100.000,00!");
                  setModal(null);
                }, 500)
              }
              buttonName="Assinar"
            />
          ) : (
            <Modal
              image={modal.image}
              title={modal.title}
              description={modal.description}
              premium={modal.premium}
              handleModal={() => setModal(null)}
            />
          )
        ) : null}
      </NewsList>
    </Container>
  );
};

import { render, screen } from "@testing-library/react";
import { Noticias } from "./Noticias";
import { data } from "./fakeRest";
import { Card } from "./Card";


interface ICard {
  image: string;
  title: string;
  date: string;
  descriptionCurto: string;
  handleBtn: (/* event: MouseEvent<Element, MouseEvent> */) => void;
}

const mockSearch = jest.fn();


describe("Noticias", () => {
  describe("Should render title", () => {
    it("should render title", () => {
      render(<Noticias />);
      expect(screen.getByText("Notícias dos Simpsons")).toBeInTheDocument();
    });

  });

  describe("Should render news", () => {
    it("should render cards", () => {
      render(<Noticias />);

      const dados = data.map((item) => item.id)
      expect(dados).toHaveLength(3);
      // expect(screen.getByRole("img")).toBeInTheDocument();
    });
    
  });

});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Quote } from "./Quote";
import { store } from "../../app/store";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { QuoteButton } from "./QuoteButton";

const mockSearch = jest.fn();

// beforeEach(() => {
//   render(
//     <Provider store={store}>
//       <Quote />
//     </Provider>
//   );
// })

describe("Quote", () => {
  describe("When render default state, in the form presents", () => {
    it("Nenhuma citação encontrada.", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(
        screen.getByText("Nenhuma citação encontrada.")
      ).toBeInTheDocument();
    });

    it("placeholder: Digite o autor...", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(
        screen.getAllByPlaceholderText(
          "Digite o nome do personagem: Homer, Bart, Lisa, Maggie, Marge..."
        )
      ).not.toBeNull();
    });

    it("Get random quote", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      // screen.debug();
      expect(screen.getByText("Obter citação aleatória")).toBeInTheDocument();
    });

    it("Button 'clear'", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(screen.getByText("Apagar")).toBeInTheDocument();
    });
  });

  describe("Insert value in input", () => {
    it("allow to write the character name", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      const input = await screen.findByLabelText("personagem");
      userEvent.click(screen.getByRole("button", { name: /Obter citação/i }));
      fireEvent.change(input, { target: { value: "lisa" } });
      expect(await screen.findByDisplayValue("lisa")).toBeInTheDocument();
    });

    it("validate type. If insert number, show message that number are not allowed", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      const input = await screen.findByLabelText("personagem");
      fireEvent.change(input, { target: { value: 123 } });
      expect(await screen.findByText("Números não são aceitos.")).toBeTruthy();
    });
  });

  describe("When button is clicked", () => {
    it("call function", async () => {
      render(<QuoteButton primaryBtn={true} onClick={() => mockSearch()} />);
      const buttonText = screen.getByText("Obter citação aleatória");
      userEvent.click(buttonText);
      await waitFor(() => {
        expect(mockSearch).toBeCalled();
      });
    });

    it("clear input", async () => {
      render(<QuoteButton primaryBtn={false} onClick={() => mockSearch()} />);
      const buttonText = screen.getByText("Apagar");
      userEvent.click(buttonText);
      await waitFor(() => {
        expect(mockSearch).toBeCalled();
      });
    });
  });
});

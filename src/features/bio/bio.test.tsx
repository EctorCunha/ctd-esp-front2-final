import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Bio } from "./Bio"


describe("Noticias", () => {
    describe("Change button color", ()=> {
        it("should change button color when click on button", async () => {
            render(<Bio />)
            const buttonHomer = await screen.findByText("HOMER")
            userEvent.click(buttonHomer)
            await waitFor(() => {
                expect(buttonHomer).toHaveStyle("background-color: #fdd835")
            })
        })
    })

    describe("Should render bio", ()=> {
        it("should render default character", () => {
            render(<Bio />)
            expect(screen.getByText("Bart Simpson")).toBeInTheDocument()
        })

        it("should render character 'Homer' when click on button", async () => {
            render(<Bio />)
            const buttonHomer = await screen.findByText("HOMER")
            userEvent.click(buttonHomer)
            await waitFor(() => {
                expect(screen.getByText("Homer Simpson")).toBeInTheDocument()
            })
        })

        it("should render character 'Lisa' when click on button", async () => {
            render(<Bio />)
            const buttonLisa = await screen.findByText("LISA")
            userEvent.click(buttonLisa)
            await waitFor(() => {
                expect(screen.getByText("Lisa Simpson")).toBeInTheDocument()
            })
        })

        it("should render character 'Maggie' when click on button", async () => {
            render(<Bio />)
            const buttonMaggie = await screen.findByText("MAGGIE")
            userEvent.click(buttonMaggie)
            await waitFor(() => {
                expect(screen.getByText("Maggie Simpson")).toBeInTheDocument()
                // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
                expect(screen.getByText("Maggie é a filha mais nova de Homer e Marge, e a irmã mais nova de Bart. e Lisa. Ela é muitas vezes vista chupando sua chupeta vermelha, e quando ela anda, ele tropeça em suas roupas e cai de cara. Sendo um bebê, ele ainda não aprendeu a falar.")).toBeInTheDocument()
            })
        })

        it("should render character 'Marge' when click on button", async () => {
            render(<Bio />)
            const buttonMarge = await screen.findByText("MARGE")
            userEvent.click(buttonMarge)
            await waitFor(() => {
                expect(screen.getByText("Marge Simpson")).toBeInTheDocument()
            })
        })
    })
})
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from "../Input";

describe("Input Component", () => {

    it("rendered input", () => {
        render(<Input showDiv={false}/>)
        const searchBar = screen.getByTestId("searchBar");
        expect(searchBar).toBeInTheDocument();
    })

    it("render div", () => {
        render(<Input showDiv={true}/>)
        const divvyDiv = screen.getByTestId("divWeWantToShow")
        expect(divvyDiv).toBeInTheDocument();
    });

    it("don't render div", () => {
        render(<Input showDiv={false}/>)
        const divDivvy = screen.queryByTestId("divWeWantToShow")
        expect(divDivvy).not.toBeInTheDocument();
    });


    it("change on input causes chage on header", async () => {
        render(<Input showDiv={false}/>)
        const searchBar = screen.getByTestId("searchBar");
        const inputWord = "SpaceX"
        const header = screen.getByTestId("displaySearch");
        await fireEvent.change(searchBar, {target: {value: inputWord}})
        expect(header.innerHTML).toBe(inputWord);
    });
});
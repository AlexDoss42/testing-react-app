import { render, screen } from "@testing-library/react";
import Input from "../Input";

describe("Input Component", () => {

    it("rendered input", () => {
        render(<Input showDiv={false}/>)
        const searchBar = screen.getByTestId("searchBar");
        expect(searchBar).toBeInTheDocument();
    })

});
import { render, screen } from "@testing-library/react";
import Button from '../Button';

describe("Button Component", () => {

    it("rendered button", () => {
        render(<Button />)
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
    });
    
});
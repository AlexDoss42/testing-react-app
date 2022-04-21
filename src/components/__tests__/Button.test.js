import { render, screen, fireEvent } from "@testing-library/react";
import Button from '../Button';

describe("Button Component", () => {

    it("rendered button", () => {
        render(<Button />)
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
    });

    it("render 1 button before button click", () => {
        render(<Button />)
        const buttonList = screen.getAllByTestId("button");
        expect(buttonList).toHaveLength(1);
    });

    it("render 2 button after button click", async () => {
        render(<Button />)
        const buttonList = screen.getAllByTestId("button");
        await fireEvent.click(buttonList[0]);
        expect(screen.getAllByTestId("button")).toHaveLength(2);
    });

});
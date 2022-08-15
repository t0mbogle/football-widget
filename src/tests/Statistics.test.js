import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Statistics from "../components/Statistics";

describe("statistics", () => {
    it("full match data loads on page load", () => {
        render(<Statistics />);
        const fullMatch = screen.getByTestId('full-match-wrapper');
        const secondHalf = screen.queryByTestId('second-half-wrapper');
        const firstHalf = screen.queryByTestId('first-half-wrapper');

        expect(fullMatch).toBeInTheDocument();
        expect(firstHalf).toBeNull();
        expect(secondHalf).toBeNull();
    });

    it("only first half data renders", () => {
        render(<Statistics />);
        userEvent.click(screen.getByText('First Half'))
        const firstHalf = screen.getByTestId('first-half-wrapper');
        const fullMatch = screen.queryByTestId('full-match-wrapper');
        const secondHalf = screen.queryByTestId('second-half-wrapper');

        expect(firstHalf).toBeInTheDocument();
        expect(fullMatch).toBeNull();
        expect(secondHalf).toBeNull();
    })

    it("only second half data renders", () => {
        render(<Statistics />);
        userEvent.click(screen.getByText('Second Half'));
        const secondHalf = screen.getByTestId('second-half-wrapper');
        const firstHalf = screen.queryByTestId('first-half-wrapper');
        const fullMatch = screen.queryByTestId('full-match-wrapper');

        expect(secondHalf).toBeInTheDocument();
        expect(firstHalf).toBeNull();
        expect(fullMatch).toBeNull();
    })
});
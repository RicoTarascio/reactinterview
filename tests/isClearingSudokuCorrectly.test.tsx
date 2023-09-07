import { fireEvent, render, screen, } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from '@testing-library/user-event'
import React from "react";
import Grid from "../src/components/Grid/grid";

test("Is solving sudoku correctly", async () => {
    // Arrange
    const { container } = render(<Grid />);
    const cells = container.getElementsByTagName("input");

    // Set some values in the grid
    fireEvent.change(cells.item(2)!, { target: { value: "5" } })
    fireEvent.change(cells.item(10)!, { target: { value: "1" } })
    fireEvent.change(cells.item(80)!, { target: { value: "9" } })

    expect(cells.item(2)?.value).toBe("5")
    expect(cells.item(10)?.value).toBe("1")
    expect(cells.item(80)?.value).toBe("9")

    // Expect the grid to be in the initial state after pressing the clear button
    await userEvent.click(screen.getByText('Clear'))

    expect(cells.length).toBe(81);

    for (let i = 0; i < 81; i++) {
        expect(cells.item(i)?.value).toBe("");
    }

});
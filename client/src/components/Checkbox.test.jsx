import { cleanup, fireEvent,render,screen, waitFor } from "@testing-library/react";
import { expect,it,vi,describe, afterEach } from "vitest";
import React from "react";
import Checkbox from "./Checkbox";

const mockOnChange = vi.fn();
const mockTodo = vi.fn();

const MockCheckbox = () => {
    return (
        <Checkbox onChangeBox={mockOnChange} todo={mockTodo}/>
    );
};

describe("Input text component testing", () => {
    it("verify checkbox has change correctly",()=>{
        render(<MockCheckbox/>);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
    });
});

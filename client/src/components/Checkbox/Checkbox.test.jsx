import { cleanup, fireEvent,render,screen, waitFor } from "@testing-library/react";
import { expect,it,vi,describe, afterEach, test } from "vitest";
import React from "react";
import Checkbox from "./Checkbox";
import { TodoContextProvider } from "../../context/context";

const mockOnChange = vi.fn();
const mockTodo = vi.fn();

const MockCheckbox = () => {
    return (
        <TodoContextProvider>
            <Checkbox onChangeBox={mockOnChange} todo={mockTodo}/>
        </TodoContextProvider>
    );
};

test("verify checkbox has change correctly",()=>{
    render(<MockCheckbox/>);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
});

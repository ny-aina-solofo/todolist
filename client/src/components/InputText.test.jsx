import { cleanup, fireEvent,render,screen, waitFor } from "@testing-library/react";
import { expect,it,vi,describe, afterEach } from "vitest";
import React from "react";
import InputText from "./InputText";

afterEach(cleanup);

const mockOnAddItem = vi.fn();

const MockInputText = () => {
    return (
        <InputText onAddItem={mockOnAddItem}/>
    );
};

describe("Input text component testing", () => {
    it("verify input has correct value",()=>{
        render(<MockInputText/>);
        const input = screen.getByPlaceholderText(/Nouvelle tâche/i);
        fireEvent.change(input,{ target : { value : 'watch Mission Impossible Rogue Nation'}});
        expect(input.value).toBe('watch Mission Impossible Rogue Nation');
    });
    it("clear input after button is clicked ",()=>{
        render(<MockInputText/>);
        const input = screen.getByPlaceholderText(/Nouvelle tâche/i);
        const button = screen.getByRole('button');
        fireEvent.change(input,{ target : { value : 'watch Mission Impossible Rogue Nation'}});
        expect(input.value).toBe("watch Mission Impossible Rogue Nation");
        fireEvent.click(button);
        expect(mockOnAddItem).toHaveBeenCalledWith("watch Mission Impossible Rogue Nation");
        expect(input.value).toBe('');
    });
});

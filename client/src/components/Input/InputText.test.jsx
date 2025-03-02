import { cleanup, fireEvent,render,screen, waitFor } from "@testing-library/react";
import { expect,it,vi,describe, afterEach ,beforeEach} from "vitest";
import React from "react";
import InputText from "./InputText";
import { TodoContextProvider } from "../../context/context";
import todolistService from "../../services/todolist/todolist.service";

vi.mock("../../services/todolist/todolist.service");

const MockInputText = () => {
    const mockData = [{_id: '67a1beef2b664bd6f5338b15',libelle: 'Sleep for 1 hour',done: false,rang: '1',__v: 0}];
    todolistService.insertTodoList.mockResolvedValue({ success : true });
    todolistService.getTodoList.mockResolvedValue({ data: mockData });
    return (
        <TodoContextProvider>
            <InputText/>
        </TodoContextProvider>
    );
};
afterEach(cleanup);

describe("Input text component testing", () => {
    it("verify input has correct value",()=>{
        render(<MockInputText/>);
        const input = screen.getByPlaceholderText(/Nouvelle tâche/i);
        fireEvent.change(input,{ target : { value : 'watch Mission Impossible Rogue Nation'}});
        expect(input.value).toBe('watch Mission Impossible Rogue Nation');
    });
    it("clear input after button is clicked",()=>{
        render(<MockInputText/>);
        const input = screen.getByPlaceholderText(/Nouvelle tâche/i);
        const button = screen.getByRole('button');
        fireEvent.change(input,{ target : { value : 'watch Mission Impossible Rogue Nation'}});
        expect(input.value).toBe("watch Mission Impossible Rogue Nation");
        fireEvent.click(button);
        expect(input.value).toBe('');
    });
    it("add todolist",async()=>{
        render(<MockInputText/>);
        const input = screen.getByPlaceholderText(/Nouvelle tâche/i);
        const button = screen.getByRole('button');
        fireEvent.change(input,{ target : { value : 'watch Mission Impossible Rogue Nation'}});
        expect(input.value).toBe("watch Mission Impossible Rogue Nation");
        fireEvent.click(button);
        expect(todolistService.insertTodoList).toHaveBeenCalledWith("watch Mission Impossible Rogue Nation");
        expect(todolistService.getTodoList).toHaveBeenCalled();    
    });
    
});

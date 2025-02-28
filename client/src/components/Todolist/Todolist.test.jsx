import { cleanup,render,screen, waitFor ,fireEvent} from "@testing-library/react";
import Todolist from "./Todolist";
import  { expect,it,vi,describe,afterEach } from "vitest";
import React from "react";
import todolistService from "../../services/todolist/todolist.service";

vi.mock('../services/todolist/todolist.service');

const todo = [
    {_id: '67a1beef2b664bd6f5338b15',libelle: 'Sleep for 1 hour',done: false,rang: '1',__v: 0},
    {_id: '67a1beef2b664bd6f5338b16',libelle: 'Learn TDD',done: false,rang: '2',__v: 0}
]        
const MockTodolist = () => {
    todolistService.getTodoList.mockResolvedValue({ data : todo });
    todolistService.insertTodoList.mockResolvedValue({ success : true });
    todolistService.deleteTodoList.mockResolvedValue({ success : true });
    todolistService.updateCheckbox.mockResolvedValue({ success : true });
	return (
        <Todolist/>
    );
};

afterEach(cleanup);

describe("Todolist component testing", () => {
    it("display todolist",async()=>{
        render(<MockTodolist/>)
        expect(todo.map(item => item.libelle)).toEqual(['Sleep for 1 hour', 'Learn TDD']);    
    });

    it("add todolist",async()=>{
        render(<MockTodolist/>);
        const input = screen.getByPlaceholderText(/Nouvelle tâche/i);
        const button = screen.getByRole('button');
        fireEvent.change(input,{ target : { value : 'watch Mission Impossible Rogue Nation'}});
        expect(input.value).toBe("watch Mission Impossible Rogue Nation");
        fireEvent.click(button);
        expect(todolistService.insertTodoList).toHaveBeenCalledWith("watch Mission Impossible Rogue Nation");    
    });

    it("delete todolist",async()=>{
        render(<MockTodolist/>)
        // Attendre que la liste soit affichée
        await waitFor(() => {
            expect(screen.getByText("Sleep for 1 hour")).toBeInTheDocument();
        });
        const deleteButtons = screen.getAllByText('x');
        fireEvent.click(deleteButtons[0]);
        expect(todolistService.deleteTodoList).toHaveBeenCalledWith("67a1beef2b664bd6f5338b15");
        expect(screen.queryByText('Sleep for 1 hour')).toBeNull(); // vérifier que l'élément n'est plus affiché dans le DOM
    });

    it("update checkbox",async()=>{
        render(<MockTodolist/>)
        await waitFor(() => {
            expect(screen.getByText("Sleep for 1 hour")).toBeInTheDocument();
        });
        const checkboxs = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxs[0]);
        expect(checkboxs[0].checked).toBe(true);
        expect(todolistService.updateCheckbox).toHaveBeenCalledWith("67a1beef2b664bd6f5338b15",true);
    });

});

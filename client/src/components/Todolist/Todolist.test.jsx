import { cleanup,render,screen, waitFor ,fireEvent} from "@testing-library/react";
import Todolist from "./Todolist";
import  { expect,it,vi,describe,afterEach } from "vitest";
import React from "react";
import todolistService from "../../services/todolist/todolist.service";
import { TodoContextProvider } from "../../context/context";

vi.mock('../../services/todolist/todolist.service');

const todo = [
    {_id: '67a1beef2b664bd6f5338b15',libelle: 'Sleep for 1 hour',done: false,rang: 1,__v: 0},
    {_id: '67a1beef2b664bd6f5338b16',libelle: 'Learn TDD',done: false,rang: 2,__v: 0}
]        
const MockTodolist = () => {
    todolistService.getTodoList.mockResolvedValue({ data : todo });
    return (
        <TodoContextProvider>
            <Todolist/>
        </TodoContextProvider>
    );
};

afterEach(cleanup);

describe("Todolist component testing", () => {
    it("display todolist",async()=>{
        render(<MockTodolist/>)
        expect(todo.map(item => item.libelle)).toEqual(['Sleep for 1 hour', 'Learn TDD']);    
    });
});

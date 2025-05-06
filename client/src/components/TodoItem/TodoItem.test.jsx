import { cleanup, render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, expect, it, vi, describe, afterEach } from "vitest";
import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoContextProvider, useTodoDispatch } from "../../context/context";
import todolistService from "../../services/todolist/todolist.service";

vi.mock("../../services/todolist/todolist.service");
vi.mock("../../context/context", () => ({
    useTodoDispatch: vi.fn()
}));

const mockDispatch = vi.fn();
useTodoDispatch.mockReturnValue(mockDispatch);

const todo = [
    {_id: '67a1beef2b664bd6f5338b15',libelle: 'Sleep for 1 hour',done: false,rang: 1,__v: 0},
    {_id: '67a1beef2b664bd6f5338b16',libelle: 'Learn TDD',done: false,rang: 2,__v: 0}
]
const MockTodo = () => {
    todolistService.getTodoList.mockResolvedValue({ data : todo });
    todolistService.deleteTodoList.mockResolvedValue({ success : true });
    todolistService.updateCheckbox.mockResolvedValue({ success : true });
	return (
        <TodoItem todo={todo}/>
    );
};

afterEach(cleanup);

describe("Todo component tests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("display todolist",async()=>{
        render(<MockTodo/>)
        expect(todo.map(item => item.libelle)).toEqual(['Sleep for 1 hour', 'Learn TDD']);    
    });
    
    it("delete todolist", async () => {
        render(<MockTodo/>)
        const deleteButtons = screen.getAllByRole('img');
        fireEvent.click(deleteButtons[0]);
        expect(mockDispatch).toHaveBeenCalledWith({ type: "delete_item", id: todo._id });
        expect(todolistService.deleteTodoList).toHaveBeenCalledWith(todo._id);
    });

    it("update checkbox", async () => {
        render(<MockTodo/>)
        const checkboxs = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxs[0]);
        expect(checkboxs[0].checked).toBe(true);
        expect(mockDispatch).toHaveBeenCalledWith({ type: "update_checkbox", id: todo._id });
        expect(todolistService.updateCheckbox).toHaveBeenCalledWith(todo._id, true);
    });
});

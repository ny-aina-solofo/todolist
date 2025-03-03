import React, { useEffect, createContext, useContext, useReducer } from 'react';
import todolistService from "../services/todolist/todolist.service";
import { todoReducer } from './reducer';

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer,{
		allTodos: [],
		filteredTodos: []
	});
	useEffect(() => {
		todolistService.getTodoList().then(response => {
			dispatch({ type: 'set_data', data: response?.data || [] });
        });
    }, []);
	return(
		<TodoContext.Provider value={ state.filteredTodos }>
			<TodoDispatchContext.Provider value={ dispatch }>
				{children}
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	)
};

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);

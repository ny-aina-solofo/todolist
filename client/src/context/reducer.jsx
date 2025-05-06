export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'set_data': // Initialisation avec les données récupérées
            return { 
                allTodos: action.data, 
                filteredTodos: action.data 
            };

        case 'delete_item':
            const deleteItems = state.allTodos.filter(todo => todo._id !== action.id);
            return { 
                allTodos: deleteItems, 
                filteredTodos: deleteItems 
            };

        case 'update_checkbox':
            const updateCheckbox = state.allTodos.map(todo => 
                todo._id !== action.id ? todo : { ...todo, done: !todo.done }
            );
            return { 
                allTodos: updateCheckbox, 
                filteredTodos: updateCheckbox 
            };

        case 'display_all_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos 
            };

        case 'display_active_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos.filter(todo => todo.done === false) 
            };

        case 'display_completed_items':
            return { 
                ...state, 
                filteredTodos: state.allTodos.filter(todo => todo.done === true) 
            };
        case 'clear_completed_items':
            const clearCompletedList = state.allTodos.filter(todo => todo.done === false);
            return { 
                allTodos: clearCompletedList, 
                filteredTodos: clearCompletedList 
            };
        case 'drag_and_drop':
            return { 
                allTodos: action.updatedList, 
                filteredTodos: action.updatedList 
            };
        default:
            throw Error('Unknown action: ' + action.type);
    }
};

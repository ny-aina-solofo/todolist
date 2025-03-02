export const todoReducer = (todos,action) => {
    switch (action.type) {
        case 'set_data': // Initialisation avec les données récupérées
            return action.data;
        case 'delete_item':
            return todos.filter((todo)=> todo._id !== action.id);
        case 'update_checkbox':
            return todos.map((todo) =>todo._id !== action.id ? todo : { ...todo, done: !todo.done });
        default:
            {
                throw Error('Unknown action: ' + action.type);
            }
    }
}
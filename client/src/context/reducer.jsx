// export const data = [
//     { _id: 0, libelle: 'La promenade du philosophe', done: true },
//     { _id: 1, libelle: 'Visiter le temple', done: false },
//     { _id: 2, libelle: 'Boire du thé matcha', done: false }
// ];

export const todoReducer = (todos,action) => {
    switch (action.type) {
        case 'set_data': // Initialisation avec les données récupérées
            return action.data;
        // case 'add_item':
        //     const newTodo = {
		// 		_id: Date.now(),
		// 		libelle: action.libelle,
		// 		done: false
		// 	};
        //     return [...todos,newTodo];
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
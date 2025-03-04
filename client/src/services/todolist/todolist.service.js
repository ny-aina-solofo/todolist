import http from "../http_common";

class TodoListService{
    getTodoList(){
        return http.get('/get-todo',{})
    }
    insertTodoList(libelle){
        return http.post('/insert-todo',{libelle});
    }
    deleteTodoList(id){
        return http.delete(`/delete-todo/${id}`);
    }
    updateCheckbox(id,done){
        return http.put('/update-checkbox',{id,done});
    }
    updateTodoListOrder(updatedList){
        return http.put('/update-order',{updatedList});
    }
}

export default new TodoListService();
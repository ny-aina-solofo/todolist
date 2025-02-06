import http from "../http_common";

class TodoListService{
    getTodoList(){
        return http.get('/get-todo',{})
    }
    insertTodoList(libelle){
        return http.post('/insert-todo',{libelle});
    }
}

export default new TodoListService();
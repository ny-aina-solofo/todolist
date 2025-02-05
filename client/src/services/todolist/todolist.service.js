import http from "../http_common";

class TodoListService{
    getTodoList(){
        return http.get('/get-todo',{})
    }
}

export default new TodoListService();
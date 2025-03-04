import { beforeEach, describe, expect, it, vi } from "vitest";
import todolistService from './todolist.service';
import http from '../http_common';

vi.mock('../http_common', () => {
    return {
        default: {
            get: vi.fn(),
            post: vi.fn(),
            delete: vi.fn(),
            put: vi.fn()
        },
    };
});
  
describe("http service test", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("get todo", async () => {
        // Définition de la valeur attendue
        const todo = [{
            _id: '67a1beef2b664bd6f5338b15',
            libelle: 'Sleep for 1 hour',
            done: false,
            rang: '1',
            __v: 0
        }];
        http.get.mockResolvedValue(todo); // Simulation de la réponse du module http pour la méthode get
        const data = await todolistService.getTodoList();
        expect(http.get).toHaveBeenCalledWith('/get-todo', {}); // Vérification que http.get a été appelé avec les bons paramètres
        expect(data).toEqual(todo); // Vérification que la réponse du service correspond à ce qui a été simulé
    });

    it("insert todo", async () => {
        const newLibelle = 'Sleep for 1 hour';
        http.post.mockResolvedValue({ success: true });
        await todolistService.insertTodoList(newLibelle);
        expect(http.post).toHaveBeenCalledWith('/insert-todo', { libelle: newLibelle });
    });

    it("delete todo", async () => {
        const _id = '67a1beef2b664bd6f5338b15';
        http.delete.mockResolvedValue({ success: true });
        await todolistService.deleteTodoList(_id);
        expect(http.delete).toHaveBeenCalledWith(`/delete-todo/${_id}`);
    });

    it("update checkbox", async () => {
        const _id = '67a1beef2b664bd6f5338b15';
        const done = true;
        http.put.mockResolvedValue({ success: true });
        await todolistService.updateCheckbox(_id,done);
        expect(http.put).toHaveBeenCalledWith('/update-checkbox',{id : _id ,done : done});
    });
    it("update list order", async () => {
        const updatedList = [{
            _id: '67a1beef2b664bd6f5338b15',
            libelle: 'Sleep for 1 hour',
            done: false,
            rang: '1'            
        }];
        http.put.mockResolvedValue({ success: true });
        await todolistService.updateTodoListOrder(updatedList);
        expect(http.put).toHaveBeenCalledWith('/update-order',{updatedList : updatedList});
    });
});

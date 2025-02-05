import { describe, expect, it, vi } from "vitest";
import todolistService from './todolist.service';

vi.mock('./todolist.service');

describe("http service test", () => {
    it("get todo", async () => {
        // Définition de la valeur attendue
        const todo = [{
            _id: '67a1beef2b664bd6f5338b15',libelle: 'Sleep for 1 hour',
            done: false,rang: '1',__v: 0
        }]

        // configuration du mock et Simulation du comportement de getTodolist : 
        todolistService.getTodoList.mockResolvedValue(todo);
        
        // Exécution du service et Vérification des résultats attendue avec une assertion :
        return todolistService.getTodoList().then((data) => {
            expect(data).toEqual(todo)
        })
    });
});

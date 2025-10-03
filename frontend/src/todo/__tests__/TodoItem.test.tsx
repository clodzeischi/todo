import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import TodoItem from "../TodoItem.tsx";
import type {Todo} from "../Todo.ts";


describe('Todo item', () => {

    const listOfTodos: Todo[] = [
        {id: 1, name: 'trash', description: 'Take out trash', status: 'incomplete', assignee: 'you', points: 5},
        {id: 2, name: 'sweep', description: 'Sweep the floor', status: "incomplete", assignee: 'you', points: 2}
    ];

    const fakeFunc = vi.fn();

    it('should display title for todo', () => {
        render(<table><tbody><TodoItem itemData={listOfTodos[0]} handleToggle={fakeFunc}/></tbody></table>);
        expect(screen.getAllByRole('cell')[0]).toBeVisible();
    });

    it('should show first item status as incomplete', () => {
        render(<table><tbody><TodoItem itemData={listOfTodos[0]} handleToggle={fakeFunc} /></tbody></table>);

    })

    it('should switch status to complete on click', () => {
        render(<table><tbody><TodoItem itemData={listOfTodos[0]} handleToggle={fakeFunc} /></tbody></table>);
    })
});
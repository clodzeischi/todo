import { TodoItem } from "./TodoItem.tsx";
import type { Todo } from "./Todo.ts";
import { useState } from "react";
import { TodoDialog } from "./TodoDialog.tsx";

export const TodoPage = () => {

    const listOfTodos: Todo[] = [
        {id: 1, title: 'trash', description: 'Take out trash', status: 'incomplete', points: 5},
        {id: 2, title: 'sweep', description: 'Sweep the floor', status: "incomplete", points: 2}
    ];

    const [todos, setTodos] = useState<Todo[]>(listOfTodos);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleToggle = (id: number) => {
        setTodos(todos.map( todo => {
            if (todo.id === id) {
                if (todo.status == 'incomplete') {
                    return {...todo, status: 'complete'};
                } else {
                    return {...todo, status: 'incomplete'};
                }
            } else {
                return todo;
            }
        }));
    }

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    }

    const handleClose = () => {
        setIsDialogOpen(false);
    }

    return (
        <div className="w-full flex flex-col items-center mt-8 space-y-4">
            <button onClick={() => setIsDialogOpen(true)}>Add task</button>

            <table className={"border border-gray-300 rounded-md shadow-sm"}>
                <thead className={"bg-gray-100 text-left text-sm font-semibold text-gray-700"}>
                    <tr>
                        <th className={"px-4 py-2 border-b"}>#</th>
                        <th className={"px-4 py-2 border-b"}>Title</th>
                        <th className={"px-4 py-2 border-b"}>Description</th>
                        <th className={"px-4 py-2 border-b"}>Points</th>
                        <th className={"px-4 py-2 border-b w-32"}>Status</th>
                    </tr>
                </thead>
                <tbody className={"text-sm text-gray-600"}>
                    {todos.map( (todo : Todo, key : number) =>
                        <TodoItem key={key} itemData={todo} handleToggle={handleToggle}/>)}
                </tbody>
            </table>

            {isDialogOpen && <TodoDialog handleClose={handleClose} addTodo={addTodo}/>}
        </div>
    );
}
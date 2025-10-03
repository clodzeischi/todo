import TodoItem from "./TodoItem.tsx";
import type {Todo} from "./Todo.ts";
import {useState} from "react";

const TodoPage = () => {

    const listOfTodos: Todo[] = [
        {id: 1, name: 'trash', description: 'Take out trash', status: 'incomplete', assignee: 'you', points: 5},
        {id: 2, name: 'sweep', description: 'Sweep the floor', status: "incomplete", assignee: 'you', points: 2}
    ];

    const [todos, setTodos] = useState<Todo[]>(listOfTodos);

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

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Assignee</th>
                        <th>Points</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map( (todo : Todo, key : number) =>
                        <TodoItem key={key} itemData={todo} handleToggle={handleToggle}/>)}
                </tbody>
            </table>
        </>
    );
}

export default TodoPage;
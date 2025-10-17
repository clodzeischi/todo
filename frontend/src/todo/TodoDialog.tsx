import {useState} from "react";
import type {Todo} from "./Todo.ts";

interface TodoDialogProps {
    handleClose: () => void,
    addTodo: (todo: Todo) => void
}

export const TodoDialog = ({handleClose, addTodo} : TodoDialogProps) => {

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [points, setPoints] = useState<number>();

    const handleSubmit = () => {
        const todo = {
            id: 99,
            title: title ?? 'No title',
            description: description ?? 'No description',
            points: points ?? 0,
            status: 'incomplete' as 'incomplete'
        }
        addTodo(todo);
        handleClose();
    }

    return (
        <div role={'dialog'} aria-label={'Add new task dialog'} className={"fixed inset-0 flex flex-col items-center justify-center"}>
            <h2>Add new todo</h2>
                <label htmlFor={'title'} className="text-sm font-medium text-gray-700">Title</label>
                <input id={'title'} name={'title'} type={'text'}
                       className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                       value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor={'description'} className="text-sm font-medium text-gray-700">Description</label>
                <input id={'description'} name={'description'} type={'text'}
                       className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label htmlFor={'points'} className="text-sm font-medium text-gray-700">Points</label>
                <input id={'points'} name={'points'} type={'number'}
                       className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={points} onChange={(e) => setPoints(Number.parseInt(e.target.value))}/>

            <button onClick={handleSubmit} className={'my-4 px-4 py-1 bg-blue-700 text-white rounded hover:bg-blue-900 transition'}>Submit</button>
            <button onClick={handleClose} className={"my-4 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"}>Close</button>
        </div>
    );
}
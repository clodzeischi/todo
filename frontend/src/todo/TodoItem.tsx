import type {Todo} from "./Todo.ts";

export const TodoItem = ({itemData, handleToggle} : {itemData: Todo, handleToggle: (id: number) => void}) => {

    return (
        <tr className={"hover:bg-gray-50 transition"} >
            <td>{itemData.id}</td>
            <td>{itemData.title}</td>
            <td>{itemData.description}</td>
            <td>{itemData.points}</td>
            <td><button onClick={() => handleToggle(itemData.id)}>Mark {itemData.status === 'complete' ? 'Incomplete' : 'Complete'}</button></td>
        </tr>
    )
}
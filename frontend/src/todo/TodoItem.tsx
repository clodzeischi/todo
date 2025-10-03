import type {Todo} from "./Todo.ts";

const TodoItem = ({itemData, handleToggle} : {itemData: Todo, handleToggle: (id: number) => void}) => {

    return (
        <tr>
            <td>{itemData.id}</td>
            <td>{itemData.name}</td>
            <td>{itemData.description}</td>
            <td>{itemData.assignee}</td>
            <td>{itemData.points}</td>
            <td><button onClick={() => handleToggle(itemData.id)}>Mark {itemData.status === 'complete' ? 'Incomplete' : 'Complete'}</button></td>
        </tr>
    )
}

export default TodoItem;
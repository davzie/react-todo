import PropTypes from "prop-types";
import { useRef } from "react";
import TodoListItem from "./TodoListItem";

function TodoListInput(props) {
    let title = useRef('')

    const handleInput = (event) => {
        if (event.key === 'Enter') {
            props.onAdd(title.current)
            title.current = ''
            event.target.value = ''
        }else{
            title.current = event.target.value
        }
    }

    return (
        <div>
            <label htmlFor="new-todo" className="sr-only">
                Todo Title
            </label>
            <input
                type="text"
                name="new-todo"
                id="new-todo"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="What you gonna do..."
                onKeyDown={handleInput}
            />
        </div>
    )
}

TodoListInput.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default TodoListInput
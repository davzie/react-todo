import TodoListItem from "./TodoListItem"
import { TodoListItem as TTodoListItem } from "../types/TodoListItem"
import { useState } from "react"
import TodoListInput from "./TodoListInput";

export default function TodoList() {
    let initialTodos = new Array<TTodoListItem>()
    const [todos, setTodos] = useState(initialTodos)

    const addNewTodo = (title) => {
        let todoItem: TTodoListItem
        todoItem = {
            id: todos.length + 1,
            title: title,
            checked: false
        }

        setTodos(todos => [...todos, todoItem])
    }

    return (
        <fieldset className="max-w-lg mx-auto">
            <legend className="text-lg font-medium text-gray-900">Todos</legend>

            <TodoListInput onAdd={addNewTodo} />

            <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                {todos.map((todo) => (
                    <TodoListItem id={todo.id} title={todo.title} checked={todo.checked} />
                ))}
            </div>
        </fieldset>
    )
}
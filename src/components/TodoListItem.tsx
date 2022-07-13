import PropTypes from 'prop-types'
import {useState} from 'react'

interface TodoListItemProps {
    id: number,
    title: string,
    checked: boolean
}

function TodoListItem(props: TodoListItemProps) {
    let [isChecked, setIsChecked] = useState(props.checked)

    let toggleTodo = (e: any)=>{
        setIsChecked(e.target.checked)
    }

    return (
        <div key={props.id} className={`relative flex items-start py-4 ${ isChecked ? 'opacity-30' : '' }`}>
            <div className="min-w-0 flex-1 text-sm">
                <label htmlFor={`person-${props.id}`} className={`font-medium text-gray-700 select-none ${ isChecked ? 'line-through' : '' }`}>
                    {props.title}
                </label>
            </div>
            <div className="ml-3 flex items-center h-5">
                <input
                    defaultChecked={props.checked}
                    id={`person-${props.id}`}
                    name={`person-${props.id}`}
                    type="checkbox"
                    onChange={toggleTodo}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
            </div>
        </div>
    )
}

TodoListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default TodoListItem
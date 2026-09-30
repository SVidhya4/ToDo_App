import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, toggleCompleted, deleteTodo } from "../features/todo/TodoSlice";

function Todos({ todo }) {
    const dispatch = useDispatch();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.msg);

    const editTodo = () => {
        if (!todoMsg.trim()) {
            alert("Please enter a valid todo");
            return;
        }

        dispatch(updateTodo({
    id: todo.id,
    msg: todoMsg,
    completed: todo.completed
}));
        setIsTodoEditable(false);
    }
    
    const toggleComplete = () => {
        dispatch(toggleCompleted({ id: todo.id }));;
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(deleteTodo({ id: todo.id }))}
            >
                ❌
            </button>
        </div>
    );
}

export default Todos;

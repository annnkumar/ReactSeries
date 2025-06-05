import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts'

export const TodoItem = ({ todo }) => {
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    return (
        <div className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 items-center group">
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    todo.completed ? 'line-through' : ''
                }`}
                value={todo.todo}
                onChange={(e) => updateTodo(todo.id, { ...todo, todo: e.target.value })}
            />
            <button
                onClick={() => deleteTodo(todo.id)}
                className="invisible group-hover:visible text-red-500"
            >
                Delete
            </button>
        </div>
    )
}
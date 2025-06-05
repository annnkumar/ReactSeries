import { createContext, useContext } from 'react'

export const TodoContext = createContext()

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
} 
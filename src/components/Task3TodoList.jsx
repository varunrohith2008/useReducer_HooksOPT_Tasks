import React, { useReducer, useState } from 'react';

const initialState = { todos: [] };

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, { id: Date.now(), text: action.payload }] };
        case 'DELETE_TODO':
            return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
        case 'CLEAR_ALL':
            return { todos: [] };
        default:
            return state;
    }
}

export default function Task3TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            dispatch({ type: 'ADD_TODO', payload: input });
            setInput('');
        }
    };

    return (
        <div className="flex flex-col p-8 bg-white rounded-2xl shadow-xl max-w-lg mx-auto mt-10 border border-gray-100 min-h-[400px]">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Todo List</h2>

            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="New task..."
                />
                <button
                    onClick={handleAdd}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                    Add
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-1 custom-scrollbar">
                {state.todos.length === 0 ? (
                    <p className="text-gray-400 text-center mt-10 italic">No tasks yet...</p>
                ) : (
                    state.todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="group flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
                        >
                            <span className="text-gray-700">{todo.text}</span>
                            <button
                                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                                className="text-red-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 p-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    ))
                )}
            </div>

            {state.todos.length > 0 && (
                <button
                    onClick={() => dispatch({ type: 'CLEAR_ALL' })}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold underline decoration-2 underline-offset-4 self-center"
                >
                    Clear All Tasks
                </button>
            )}
        </div>
    );
}

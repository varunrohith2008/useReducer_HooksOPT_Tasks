import React, { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    password: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default function Task2InputManager() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto mt-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Input Manager</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        value={state.name}
                        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                        placeholder="Enter name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                        placeholder="Enter password"
                    />
                </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-mono text-sm text-gray-600 break-words">
                    {JSON.stringify(state, null, 2)}
                </p>
            </div>

            <button
                onClick={() => dispatch({ type: 'RESET' })}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-md"
            >
                Reset Form
            </button>
        </div>
    );
}

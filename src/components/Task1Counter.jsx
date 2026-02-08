import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return { count: state.count + 5 };
        case 'DEC':
            return { count: state.count - 5 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

export default function Task1Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl max-w-sm mx-auto mt-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Counter</h2>
            <div className="text-6xl font-black text-indigo-600 mb-8">{state.count}</div>
            <div className="flex gap-4">
                <button
                    onClick={() => dispatch({ type: 'INC' })}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md active:scale-95"
                >
                    +5
                </button>
                <button
                    onClick={() => dispatch({ type: 'DEC' })}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md active:scale-95"
                >
                    -5
                </button>
                <button
                    onClick={() => dispatch({ type: 'RESET' })}
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md active:scale-95"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

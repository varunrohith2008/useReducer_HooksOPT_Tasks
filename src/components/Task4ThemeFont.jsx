import React, { useReducer } from 'react';

const initialState = {
    dark: false,
    fontSize: 16
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, dark: !state.dark };
        case 'INC_FONT':
            return { ...state, fontSize: state.fontSize + 2 };
        case 'DEC_FONT':
            return { ...state, fontSize: Math.max(8, state.fontSize - 2) };
        default:
            return state;
    }
}

export default function Task4ThemeFont() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div
            className={`flex flex-col p-8 rounded-2xl shadow-xl max-w-lg mx-auto mt-10 transition-colors duration-500 border ${state.dark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-100'
                }`}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Vanakkam</h2>
                <button
                    onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
                    className={`p-2 rounded-full transition-colors ${state.dark ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                        }`}
                >
                    {state.dark ? 'Light' : 'Dark'}
                </button>
            </div>

            <div
                className="mb-8 leading-relaxed transition-all duration-300"
                style={{ fontSize: `${state.fontSize}px` }}
            >
                <p>
                    Adhu Onnum illa Poitu Nalaiku vaanga ,
                    Nalaiku Enna Pannanum na Adhu Edhuvum Illa Poitu Thoongunga
                </p>
            </div>

            <div className="flex gap-4 items-center justify-center p-4 bg-opacity-10 bg-gray-500 rounded-lg">
                <span className="text-sm font-medium opacity-70">Font Size: {state.fontSize}px</span>
                <button
                    onClick={() => dispatch({ type: 'DEC_FONT' })}
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all ${state.dark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    -
                </button>
                <button
                    onClick={() => dispatch({ type: 'INC_FONT' })}
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all ${state.dark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    +
                </button>
            </div>
        </div>
    );
}

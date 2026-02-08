import React from 'react';

export default function Navbar({ activeTask, setActiveTask }) {
    const tasks = [
        { id: 1, label: 'Counter' },
        { id: 2, label: 'Input Form' },
        { id: 3, label: 'Todo List' },
        { id: 4, label: 'Theme & Font' },
    ];

    return (
        <nav className="bg-white shadow-sm mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600 mr-8">Tasks</span>
                        <div className="hidden sm:flex space-x-4">
                            {tasks.map((task) => (
                                <button
                                    key={task.id}
                                    onClick={() => setActiveTask(task.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTask === task.id
                                        ? 'bg-indigo-100 text-indigo-700'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {task.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Mobile menu button (simple implementation) */}
                    <div className="flex items-center sm:hidden overflow-x-auto gap-2 no-scrollbar">
                        {tasks.map((task) => (
                            <button
                                key={task.id}
                                onClick={() => setActiveTask(task.id)}
                                className={`whitespace-nowrap px-3 py-2 rounded-md text-xs font-medium transition-colors ${activeTask === task.id
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {task.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

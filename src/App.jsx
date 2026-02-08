import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Task1Counter from './components/Task1Counter';
import Task2InputManager from './components/Task2InputManager';
import Task3TodoList from './components/Task3TodoList';
import Task4ThemeFont from './components/Task4ThemeFont';

function App() {
    const [activeTask, setActiveTask] = useState(1);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Navbar activeTask={activeTask} setActiveTask={setActiveTask} />

            <main className="container mx-auto px-4">
                {activeTask === 1 && <Task1Counter />}
                {activeTask === 2 && <Task2InputManager />}
                {activeTask === 3 && <Task3TodoList />}
                {activeTask === 4 && <Task4ThemeFont />}
            </main>
        </div>
    );
}

export default App;

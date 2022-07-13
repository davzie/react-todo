import {Link, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <nav className="bg-gray-800 p-4 text-white flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
            </nav>

            <main className="p-4">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/todos" element={<TodoList/>}/>
                </Routes>
            </main>

        </div>
    )
}

export default App

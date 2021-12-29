
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register';
import Login from './components/Login/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Login />
                <Register />
            </BrowserRouter>
        </div>
    );
}

export default App


import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
            <Login />
            </BrowserRouter>
        </div>
    );
}

export default App

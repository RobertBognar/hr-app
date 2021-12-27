import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Register from './components/Register';

import Login from './components/Login/Login';


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Register />
                <Login />
            </BrowserRouter>

        </div>
    );
}

export default App;

import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
            
            
            </BrowserRouter>
            
        </div>
    );
}

export default App;

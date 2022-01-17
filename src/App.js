import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import HomepageAuthUser from './components/homepage-authuser/HomepageAuthUser';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import GuestRoute from './components/Routes/GuestRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route element={<GuestRoute />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        <Route element={<ProtectedRoute />}>
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route
                                path="/team"
                                element={<HomepageAuthUser />}
                            />
                            <Route path="/board" element={<GuestHomepage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;

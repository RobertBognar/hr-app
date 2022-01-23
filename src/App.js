import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import GuestLayout from './components/Layout/GuestLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Page from './components/pages/Page';
import CompanyInfoPage from './components/company-info-page/CompanyInfoPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/login" />}
                    />
                    <Route
                        path="/board"
                        element={
                            <Page
                                Layout={GuestLayout}
                                Component={GuestHomepage}
                            />
                        }
                    ></Route>
                    <Route
                        path="/login"
                        element={
                            <Page Layout={GuestLayout} Component={Login} />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Page Layout={GuestLayout} Component={Register} />
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <Page Layout={AuthLayout} Component={ProfilePage} />
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/companyinfopage"
                        element={
                            <Page
                                Layout={GuestLayout}
                                Component={CompanyInfoPage}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

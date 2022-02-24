import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import HomepageAuthUser from './components/homepage-authuser/HomepageAuthUser';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import GuestRoute from './components/Routes/GuestRoute';
import EditTeam from './components/edit-team/EditTeam';
import GuestLayout from './components/Layout/GuestLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Page from './components/pages/Page';
import CompanyInfoPage from './components/company-info-page/CompanyInfoPage';
import QuestionsListMain from './components/questions-list/QuestionsListMain';
import AddNewQuestion from './components/questions-list/AddNewQuestion';
import SubmitResponse from './components/questions-list/SubmitResponse';
import AddNewTeamMember from './components/homepage-authuser/AddNewTeamMember';

function App() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate replace to="/login" />}
                        />
                        <Route element={<GuestRoute />}>
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
                                    <Page
                                        Layout={GuestLayout}
                                        Component={Login}
                                    />
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <Page
                                        Layout={GuestLayout}
                                        Component={Register}
                                    />
                                }
                            />
                        </Route>
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="/profile"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={ProfilePage}
                                    />
                                }
                            />
                            <Route
                                path="/team"
                                element={
                                    <Page
                                        Layout={GuestLayout}
                                        Component={HomepageAuthUser}
                                    />
                                }
                            />
                            <Route
                                path="/team/:id/edit"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={EditTeam}
                                    />
                                }
                            />
                            <Route
                                path="/addnewteammember"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={AddNewTeamMember}
                                    />
                                }
                            />
                            <Route
                                path="/companyinfopage"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={CompanyInfoPage}
                                    />
                                }
                            />
                            <Route
                                path="/questionslistmain"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={QuestionsListMain}
                                    />
                                }
                            />
                            <Route
                                path="/questionslistmain/addnewquestion"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={AddNewQuestion}
                                    />
                                }
                            />
                            <Route
                                path="/submitresponse"
                                element={
                                    <Page
                                        Layout={GuestLayout}
                                        Component={SubmitResponse}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;

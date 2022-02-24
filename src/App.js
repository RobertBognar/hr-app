import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import { GetQuestionsProvider } from './context/GetQuestionsContext';
import HomepageAuthUser from './components/homepage-authuser/HomepageAuthUser';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import GuestRoute from './components/Routes/GuestRoute';
import EditTeam from './components/EditTeam/EditTeam';
import GuestLayout from './components/Layout/GuestLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Page from './components/pages/Page';
import CompanyInfoPage from './components/company-info-page/CompanyInfoPage';
import AddNew from './components/AddNewQuestion';
import QuestionsListMain from './components/questions-list/QuestionsListMain';
import SubmitResponse from './components/SubmitResponse/SubmitResponse';
import EditQuestion from './components/questions-list/EditQuestion';
import AddNewQuestion from './components/questions-list/AddNewQuestion';
import RegisterAndDropdown from './components/RegisterandDropdown/RegisterAndDropdown';
import Team from './components/Team/Team';

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
                            {/* <Route
                                path="/register"
                                element={
                                    <Page
                                        Layout={GuestLayout}
                                        Component={Register}
                                    />
                                }
                            /> */}
                            <Route
                                path="/register"
                                element={
                                    <Page
                                        Layout={GuestLayout}
                                        Component={RegisterAndDropdown}
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
                                        Layout={AuthLayout}
                                        Component={Team}
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
                                path="/addnew"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={AddNew}
                                    />
                                }
                            />
                            <Route
                                path="/questions/:id/edit"
                                element={
                                    <Page
                                        Layout={AuthLayout}
                                        Component={EditQuestion}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>

                <GetQuestionsProvider>
                    <SubmitResponse />
                </GetQuestionsProvider>
            </AuthProvider>
        </div>
    );
}

export default App;

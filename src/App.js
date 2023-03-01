import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';
import Page from './components/Page';
import ErrorPage from './pages/ErrorPage';
import GlobalStyles from './theme/global';
import baseTheme from './theme/theme';

const Cart = React.lazy(() => import('./pages/Cart'));
const Products = React.lazy(() => import('./pages/Products'));
const Registration = React.lazy(() => import('./pages/Registration'));
const Login = React.lazy(() => import('./pages/Login'));
const Users = React.lazy(() => import('./pages/Users'));
const Main = React.lazy(() => import('./pages/Main'));

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <Router>
                <GlobalStyles />

                <Page>
                    <React.Suspense>
                        <Routes>
                            <Route path="/cart" element={<Cart />} />
                            <Route exact path="/" element={<Main />} />
                            <Route path="/products/*" element={<Products />} />

                            <Route
                                path="/registration"
                                element={<Registration />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    </React.Suspense>
                </Page>
            </Router>
        </ThemeProvider>
    );
}

export default App;

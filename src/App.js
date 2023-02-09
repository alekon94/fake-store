import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/index';
import ErrorPage from './pages/ErrorPage';
import baseTheme from './theme/theme';
import GlobalStyles from './theme/global';

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

                <Header />
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
            </Router>
        </ThemeProvider>
    );
}

export default App;

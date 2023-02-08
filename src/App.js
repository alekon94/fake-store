import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import ErrorPage from './pages/errorPage';

const Cart = React.lazy(() => import('./pages/cart'));
const Products = React.lazy(() => import('./pages/products'));
const Registration = React.lazy(() => import('./pages/registration'));
const Login = React.lazy(() => import('./pages/login'));
const Users = React.lazy(() => import('./pages/users'));
const Main = React.lazy(() => import('./pages/main'));
function App() {
    return (
        <Router>
            <div className="App">
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
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import FourZeroFour from './pages/404';

const Cart = React.lazy(() => import('./pages/Cart'));
const Products = React.lazy(() => import('./pages/Products'));
const Registration = React.lazy(() => import('./pages/Registration'));
const Login = React.lazy(() => import('./pages/Login'));
const Users = React.lazy(() => import('./pages/Users'));
const Main = React.lazy(() => import('./pages/Main'));
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
                        <Route path="*" element={<FourZeroFour />} />
                    </Routes>
                </React.Suspense>
            </div>
        </Router>
    );
}

export default App;

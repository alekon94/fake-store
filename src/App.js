import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import ErrorPage from './Pages/ErrorPage';

const Cart = React.lazy(() => import('./Pages/Cart'));
const Products = React.lazy(() => import('./Pages/Products'));
const Registration = React.lazy(() => import('./Pages/Registration'));
const Login = React.lazy(() => import('./Pages/Login'));
const Users = React.lazy(() => import('./Pages/Users'));
const Main = React.lazy(() => import('./Pages/Main'));
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

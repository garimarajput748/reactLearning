import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Increment from './components/Increment';
import Table from './components/table';
import NotFound from './pages/NotFound';
import Home from './pages/home';
import PrimarySearchAppBar from './components/Header/Header';

const Routers = () => {
    return (
        <BrowserRouter>
            <PrimarySearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inc" element={<Increment />} />
                <Route path="/table" element={<Table />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Routers;
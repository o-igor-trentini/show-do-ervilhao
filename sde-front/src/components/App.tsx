import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="teste" element={<Teste />} /> */}
                <Route path="*" element={<p>Nada</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

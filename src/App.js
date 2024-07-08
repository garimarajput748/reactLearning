import { useState } from 'react';
import { MyContext } from './contextAPi/nameStore';
import Routers from './Router';

const App = () => {
    const name = 'mayak';
    const fname = "stersafs";
    const [currentTheme, setCurrentTheme] = useState('Dark');
    return (
        <MyContext.Provider value={{ name, fname, currentTheme, setCurrentTheme }}>
            <Routers />
        </MyContext.Provider>
    );
};

export default App;
import React, { useEffect } from 'react';
import LightButton from '../assets/website/light-mode-button.png';
import DarkButton from '../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme, element]);

    return (
        <div className='relative w-14'>
            <img
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                src={LightButton}
                alt="Light Mode"
                className={`w-12 cursor-pointer absolute right-2 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'
                    } transition-all duration-300`}
            />
            <img
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                src={DarkButton}
                alt="Dark Mode"
                className={`w-12 cursor-pointer`}
            />
        </div>
    );
};

export default DarkMode;

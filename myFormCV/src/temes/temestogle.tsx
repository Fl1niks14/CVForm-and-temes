import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './ThemeToggle.scss'; // Импортируем SCSS стили

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // Функция для переключения темы
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    // Эффект для применения темы
    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.body.className = theme;
    }, [isDarkMode]);

    return (
			<div className='btn'>
        <Button  variant="contained" color="primary" onClick={toggleTheme}>
            Переключить тему
        </Button>
				</div>
    );
};

export default ThemeToggle;

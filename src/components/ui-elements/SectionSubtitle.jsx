import React, { useEffect, useState } from 'react';

const SectionSubtitle = ({ subtitle, className }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // This assumes you have a way to detect dark mode, e.g., using a context or a class on the body
        const darkModeEnabled = document.body.classList.contains('dark');
        setIsDarkMode(darkModeEnabled);
    }, []);

    // Calculate the width of the underline
    const underlineWidth = `${subtitle.length * 7.5}px`;

    return (
        <div className={`flex flex-col ${className}`}>
            <h2 className="text-3xl font-semibold text-black relative dark:text-white sm:text-2xl">
                {subtitle}
            </h2>
            <div style={{ height: '3px',
                          background: isDarkMode ? 'var(--underline-color-dark)' : 'var(--underline-color-light)',
                          width: underlineWidth,
                }}
            ></div>
        </div>
    );
};

export default SectionSubtitle;
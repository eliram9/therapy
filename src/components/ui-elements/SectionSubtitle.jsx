import React from 'react';

const SectionSubtitle = ({ subtitle, className }) => {
    // Calculate the width of the underline
    const underlineWidth = `${subtitle.length * 7.5}px`;

    return (
        <div className={`flex flex-col ${className}`}>
            <h2 className="text-3xl font-semibold text-black relative dark:text-white">
                {subtitle}
            </h2>
            <div style={{ height: '3px', background: '#124C5F', width: underlineWidth }}></div>
        </div>
    );
};

export default SectionSubtitle;
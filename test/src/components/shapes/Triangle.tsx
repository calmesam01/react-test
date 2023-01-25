import React from 'react';

const Triangle = ({ size, color, x, y }: any) => {
    const triangleStyle = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        // transform: 'translate(-50%, -50%)',
    }
    return <div style={triangleStyle as any} />;
};

export default Triangle;
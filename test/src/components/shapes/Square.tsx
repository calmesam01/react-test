import React from 'react';

const Square = ({ size, color, x, y }: any) => {
    const squareStyles = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: size,
        height: size,
        backgroundColor: color
    }
    return <div style={squareStyles as any} />;
};

export default Square;
import React from 'react';

const Circle = ({ size, color, x, y }: any) => {
    console.log(x);
    const circleStyle = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: size * 2,
        height: size * 2,
        borderRadius: '50%',
        backgroundColor: color,
    }
    return <div style={circleStyle as any} />;
};

export default Circle;
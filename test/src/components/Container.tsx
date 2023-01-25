import React from "react";
import { useAppState } from "../overmind";
import styles from "./index.module.scss";
import Circle from "./shapes/Circle";
import Square from "./shapes/Square";
import Triangle from "./shapes/Triangle";

export default function Container() {
    const state = useAppState();
    return (
        <div className={styles.container}>
            {state.arr.map((item: any) => {
                const size = item.size;
                const x: number = item.position.x * (600 / 800);
                const y: number = item.position.y * (600 / 800);
                console.log(item.position.x, item.position.y);
                switch (item.type) {
                    case "triangle":
                        return <Triangle size={item.size} color={item.color} x={x} y={y} />
                    case "square":
                        return <Square size={item.size} color={item.color} x={x} y={y} />
                    case "circle":
                        return <Circle size={item.size} color={item.color} x={x} y={y}/>
                    default:
                        return <></>
                }
            })}
        </div>
    );
}
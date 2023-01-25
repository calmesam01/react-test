import React, { useEffect, useState } from "react";
import { useActions } from "../overmind";
import Container from "./Container";
import styles from "./index.module.scss";

export default function MainComponent() {
    const actions = useActions();
    const [numObjects, setNumObjects] = useState(0);
    const [objects, setObjects] = useState<any>([]);

    function createObjectWithRandomValues(obj: any, min: number, max: number): any {
        return obj;
    }

    function createObject() {
        const types = ['triangle', 'square', 'circle'];
        const colors = ['#000000', '#ff0000', '#00ff00', '#0000ff'];
        const name = Math.random().toString(36).substring(7);
        const type = types[Math.floor(Math.random() * types.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        const x = Math.floor(Math.random() * (800 - 0 + 1)) + 0;
        const y = Math.floor(Math.random() * (800 - 0 + 1)) + 0;
        return createObjectWithRandomValues({ name, type, color, size, position: { x, y } }, 0, 800);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newObjects: any = [...objects];
        for (let i = 0; i < numObjects; i++) {
            newObjects.push(createObject());
        }
        setObjects(newObjects);
    }
    useEffect(() => {
        actions.createRandomObjects(objects);
    }, [objects]);
    return (
        <div className={styles.mainComponent}>
            <div className={styles.containerWrapper}>
                <Container />
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of objects:
                    <input
                        type="number"
                        value={numObjects}
                        onChange={(e) => setNumObjects(parseInt(e.target.value))}
                    />
                </label>
                <button type="submit">Create objects</button>
            </form>
            <button onClick={() => console.log(objects)}>View objects in console</button>
        </div>
    );
}
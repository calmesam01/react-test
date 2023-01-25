import { Context } from ".";

export const createRandomObjects = ({state}: Context, objects: []): void => {
    state.arr = objects;
}

export const setNumCount = ({ state }: Context, num: number): void => {
    state.userInput = num;
};
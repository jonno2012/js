type Point = {
    x: number;
    y: number;
};

const printPoint = (point: Point): void => {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

export { printPoint };
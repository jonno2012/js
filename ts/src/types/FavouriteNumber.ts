const asyncFavouriteNumber = async (): Promise<number> => {
    return Math.floor(Math.random() * 100);
}

export { asyncFavouriteNumber };
export const randomData = [1, 7, 5, 3, 4, 2, 6, 10, 9, 8];
// export const randomData = [1, 7, 2, 4, 6, 9, 3, 12, 11, 10];
export const checkTime = (callback) => {
    const start = new Date();
    callback();
    const end = new Date();
    return end - start;
}
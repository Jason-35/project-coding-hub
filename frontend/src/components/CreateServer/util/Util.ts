export const removeValue = (arr: string[], value: string) => {
    const index = arr.indexOf(value);
    if (index !== -1) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
    return arr;
}





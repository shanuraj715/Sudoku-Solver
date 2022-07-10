export const randomInt = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const newArray9x9 = (arr) => {
    const temp = [];
    for (let i = 0; i <= 8; i++) {
        let x = []
        for (let j = 0; j <= 8; j++) {
            x[j] = arr[i][j]
        }
        temp[i] = x
    }
    return temp
}
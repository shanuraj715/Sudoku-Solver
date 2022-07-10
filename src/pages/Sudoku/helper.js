import styles from "../../styles/sudoku.module.scss";

export const classAdder = (i, j) => {
    if (i < 3 && j < 3) {
        return `${styles.cellsCollection1}`;
    }
    if (i < 3 && j < 6) {
        return `${styles.cellsCollection2}`;
    }
    if (i < 3 && j < 9) {
        return `${styles.cellsCollection1}`;
    }
    if (i < 6 && j < 3) {
        return `${styles.cellsCollection2}`;
    }
    if (i < 6 && j < 6) {
        return `${styles.cellsCollection1}`;
    }
    if (i < 6 && j < 9) {
        return `${styles.cellsCollection2}`;
    }
    if (i < 9 && j < 3) {
        return `${styles.cellsCollection1}`;
    }
    if (i < 9 && j < 6) {
        return `${styles.cellsCollection2}`;
    }
    if (i < 9 && j < 9) {
        return `${styles.cellsCollection1}`;
    }
};
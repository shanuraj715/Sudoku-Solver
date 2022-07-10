import { useState, useEffect } from "react";
import styles from "../../styles/sudoku.module.scss";
import { Sudoku as SudokuSolver } from "../../utils/Sudoku";
import { Button } from "react-bootstrap";
import { XCircle, CheckCircle } from "react-bootstrap-icons";
import Loader from "../../components/common/Loader";
import { classAdder } from "./helper";
import getDevice from "../../utils/getDevice";

function Sudoku() {
  const emptySudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const solvedEmptySudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let timeout = null;

  const [unsolved, setUnsolved] = useState([...emptySudoku]);
  const [solved, setSolved] = useState([...solvedEmptySudoku]);
  const [isSolving, setIsSolving] = useState(false);
  const { isMobile, isTablet } = getDevice();

  const [unsolvedSudoku, setUnsolvedSudoku] = useState(<></>);
  const [solvedSudoku, setSolvedSudoku] = useState(<></>);

  const reset = () => {
    setUnsolved([...emptySudoku]);
  };

  const resetSolvedMatrix = () => {
    setSolved([...solvedEmptySudoku]);
  };

  const updateUnsolvedSudoku = (value, i, j) => {
    const tempArray = [...unsolved];
    tempArray[i][j] = value;
    setUnsolved([...tempArray]);
    resetSolvedMatrix();
  };

  const cellChangeHandler = (e, i, j) => {
    const { value } = e.target;
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(value * 1) !== -1) {
      updateUnsolvedSudoku(value * 1, i, j);
    }
  };

  const inputCellFocusHandler = (e, i, j) => {
    updateUnsolvedSudoku(0, i, j);
  };

  const renderUnsolvedSudoku = () => {
    const array = [];
    for (let i = 0; i < unsolved.length; i++) {
      array.push(unsolved[i]);
    }
    const result = array.map((row, ind) => {
      return (
        <div key={ind} className={`${styles.sudokuCellsRow} d-flex gap-1 my-1`}>
          {row?.map((j, index) => {
            return (
              <input
                key={index}
                value={j === 0 ? "" : j}
                type="text"
                onFocus={(e) => inputCellFocusHandler(e, ind, index)}
                onChange={(e) => cellChangeHandler(e, ind, index)}
                className={`${styles.sudokuCell} ${
                  styles.unsolvedCells
                } ${classAdder(ind, index)}`}
              />
            );
          })}
        </div>
      );
    });
    setUnsolvedSudoku(
      <div className={`${styles.sudokuCellsContainer}`}>{result}</div>
    );
  };

  const renderSolvedSudoku = () => {
    const array = [];
    for (let i = 0; i < solved.length; i++) {
      array.push(solved[i]);
    }
    const result = array.map((row, ind) => {
      return (
        <div key={ind} className={`${styles.sudokuCellsRow} d-flex gap-1 my-1`}>
          {row?.map((j, index) => {
            return (
              <span
                key={index}
                className={`${styles.sudokuCell} ${
                  styles.solvedCells
                }  ${classAdder(ind, index)}`}
              >
                {j === 0 ? "-" : j}
              </span>
            );
          })}
        </div>
      );
    });

    setSolvedSudoku(<>{result}</>);
  };

  // SOLVE SUDOKU USING LIBRARY

  const solve = () => {
    setIsSolving(true);
    const newArray = [];
    for (let i = 0; i < unsolved.length; i++) {
      newArray.push(unsolved[i]);
    }
    const sudokuSolverObject = new SudokuSolver(newArray);
    sudokuSolverObject.solve();
    // timeout = setTimeout(() => {
    setIsSolving(false);
    setSolved([...newArray]);
    clearTimeout(timeout);
    // }, 2000);
  };

  useEffect(() => {
    renderUnsolvedSudoku();
  }, [unsolved]);

  useEffect(() => {
    renderSolvedSudoku();
  }, [solved]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

  const mobileSolveBtnClickHandler = () => {
    window.scrollTo(0, 500)
    solve();
  };

  return (
    <div className={`d-flex flex-column flex-md-row gap-1`}>
      <div
        className={`w-100 w-md-50 d-flex align-items-center justify-content-center py-4 px-2 flex-column gap-3`}
      >
        <h2 className={`${styles.matrixHeading}`}>UnSolved</h2>
        {unsolvedSudoku}
        {(isMobile || isTablet) && (
          <Button
            variant="success"
            onClick={mobileSolveBtnClickHandler}
            className={`px-4 d-flex align-items-center gap-2 mt-3 ${styles.solveBtn}`}
          >
            <CheckCircle /> Solve Sudoku
          </Button>
        )}
        <Button
          variant="danger"
          onClick={reset}
          className={`px-4 d-flex align-items-center gap-2 mt-3 ${styles.resetBtn}`}
        >
          <XCircle /> Reset Sudoku
        </Button>
      </div>
      <div
        className={`w-100 w-md-50 d-flex align-items-center justify-content-center py-4 px-2 flex-column gap-3`}
      >
        <h2 className={`${styles.matrixHeading}`}>Solved</h2>
        <div className={`${styles.sudokuCellsContainer} position-relative`}>
          {solvedSudoku}
          {isSolving && <Loader />}
        </div>
        {!(isMobile || isTablet) && (
          <Button
            variant="success"
            onClick={solve}
            className={`px-4 d-flex align-items-center gap-2 mt-3 ${styles.solveBtn}`}
          >
            <CheckCircle /> Solve Sudoku
          </Button>
        )}
      </div>
    </div>
  );
}

export default Sudoku;

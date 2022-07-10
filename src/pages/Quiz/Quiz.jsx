import { useState, useEffect } from "react";
import QuizGenerator from "../../utils/QuizGenerator";


function Quiz() {
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

  const [unsolved, setUnsolved] = useState([...emptySudoku]);

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

  return <></>;
}

export default Quiz;

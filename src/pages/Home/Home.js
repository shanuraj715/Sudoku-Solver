import React from 'react'
import { APP_META } from '../../constants'
import styles from '../../styles/home.module.scss'
import SudokuImage from '../../assets/images/sudoku.jpg'
import ReactJsImage from '../../assets/images/react-js.png'
import JavascriptImage from '../../assets/images/javascript.png'
import Hyperlink from '../../components/common/Hyperlink'
import {Cpu} from 'react-bootstrap-icons'

function Home() {

  return (
    <div className={`py-2`}>
      <div className={`text-center py-4 py-md-5 ${styles.aboutApp}`}>
        <h2>{APP_META.name}</h2>
        <p>{APP_META.description}</p>
      </div>
      <hr />
      <div className={`py-3 d-flex gap-4 flex-column flex-md-row align-items-center px-3 px-md-4 ${styles.downContainer}`}>
        <div className={`w-100 w-md-50 flex-grow-1 overflow-hidden d-flex justify-content-center ${styles.homeLeft}`}>
          <img src={SudokuImage} alt="" />
        </div>
        <div className={`w-100 w-md-50 flex-grow-2 overflow-hidden d-flex gap-3 justify-content-center flex-column overflow-visible ${styles.homeRight}`}>
          <p className="text-justify">This Sudoku Solver tool is developed by <strong>Shanu Raj</strong>.
            Tool is developed using  <img src={ReactJsImage} className={styles.homeTextImage} /> React Js and 
            algorithm using <img src={JavascriptImage} className={styles.homeTextImage} /> JavaScript</p>
            <Hyperlink url="/sudoku" className={`btn btn-secondary ${styles.startBtn}`}>
              <Cpu /> Start Solving
            </Hyperlink>
        </div>
      </div>
    </div>
  )
}

export default Home
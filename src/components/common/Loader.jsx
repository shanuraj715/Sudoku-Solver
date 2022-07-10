import React from 'react'
import styles from '../../styles/loader.module.scss'
import LoaderImage from '../../assets/images/loading.svg'

function Loader() {
  return (
    <div className={`position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center ${styles.loaderBG}`}>
      {/* <span>Solving Sudoku</span> */}
      <img src={LoaderImage} alt="" />
      <span>Please Wait...</span>
    </div>
  )
}

export default Loader
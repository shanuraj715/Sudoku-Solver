import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Container } from 'react-bootstrap'
import styles from '../../styles/mainLayout.module.scss'
import { APP_META } from '../../constants'
import { ErrorBoundary } from 'react-error-boundary'

function MainLayout(props) {
    const { children } = props

    const ErrorFallback = ({ error, resetErrorBoundary }) => {
        return <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    }


    return (
        <>
            <Header {...props} />
            <Container className={`${styles.pageBG} pb-5 mb-5 pb-md-4`} fluid style={{ backgroundImage: `url(${APP_META.domain}${APP_META.path}images/sudoku.png)` }}>
                <Container className={`${styles.mainContainer}`} >
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        {children}
                    </ErrorBoundary>
                </Container>
            </Container>
            <Footer {...props} />
        </>
    )
}

export default MainLayout
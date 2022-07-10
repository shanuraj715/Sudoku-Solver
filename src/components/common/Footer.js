import React from 'react'
import {Container, Row} from 'react-bootstrap'
import styles from '../../styles/footer.module.scss'

function Footer() {

    return (
        <Container fluid className={`fixed-bottom ${styles.footer}`}>
            <Container className={`d-flex gap-2 justify-content-center py-3 px-2 flex-column flex-md-row align-items-center`}>
                <span>Made With ❤️ Love</span>
                <span className={`d-none d-md-inline-block`}>|</span>
                <span>Designed and Developed by <strong>Shanu Raj</strong></span>
                
            </Container>
        </Container>
    )
}

export default Footer
import React, { useState, useEffect } from 'react'
import { SCREEN_SIZES } from '../constants'

function getDevice() {

    const { MOBILE_WIDTH, TABLET_WIDTH } = SCREEN_SIZES

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        isMobile: false,
        isTablet: false
    })

    const handleResize = () => {
        const width = document.documentElement.clientWidth || window.innerWidth;
        const height = document.documentElement.clientHeight || window.innerHeight

        setWindowSize({
            width: width,
            height: height,
            isMobile: width <= MOBILE_WIDTH,
            isTablet: width > MOBILE_WIDTH && width <= TABLET_WIDTH
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default getDevice
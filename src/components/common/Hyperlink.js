import React from 'react'
import { Link } from 'react-router-dom'

function Hyperlink(props) {
    const { url = '/', text, type = 'self', className = '', newTab = false, children, onClick = () => { }
    } = props


    return <>
        {type === 'self' &&
            <Link to={url} className={className} onClick={onClick}>{text ?? children ?? ''}</Link>}
        {type === 'external' &&
            <a href={url} className={className} onClick={onClick} target={newTab ? "_blank" : "_self"}>{text ?? children ?? ''}</a>}

    </>
}

export default Hyperlink
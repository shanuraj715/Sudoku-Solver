import { useState, useEffect } from "react";
import styles from "../../styles/gototop.module.scss";
import { ArrowUpCircleFill } from 'react-bootstrap-icons'

function GoToTop() {
    const [btnVisibility, setButtonVisibility] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
    }, []);

    const scrollHandler = () => {
        let scrolled = window.pageYOffset;
        scrolled > 500 ? setButtonVisibility(true) : setButtonVisibility(false);
    };

    return (
        <span
            className={`${styles.gotop} ${btnVisibility ? styles.gotoVisible : styles.gotoHidden}`}
            onClick={() => window.scrollTo(0, 0)}
        >
            <ArrowUpCircleFill />
        </span>
    );
}

export default GoToTop;
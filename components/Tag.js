import { css } from '@emotion/css';
import theme from 'theme';

const styles = {
    tag: css`
        border: 1px solid #e1e1e1;
        padding: 1px 8px 6px 8px;
        border-radius: 25px;
        margin: 8px;
        background: white;
    `
}

const Tag = (props) => {

    return (
        <span className={`p-8 no-white-space ${styles.tag}`}>
            {props.children}
        </span>
    )

}


export default Tag; 

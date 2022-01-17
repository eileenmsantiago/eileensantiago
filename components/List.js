import {Text} from 'reviga-ui';
import { css } from '@emotion/css';

const styles = {
    ul: css`
        list-style-position: outside;
        padding-left: 1em;
    `,
    li: css`
        margin-bottom: 5px;
    `
}

const List = (props) => {

  return (
    <ul className={styles.ul}>
        {props.items.map(item => (
        <li className={styles.li}>
            <Text>{item}</Text>
        </li>
        ))}
    </ul>
  )
}

List.defaultProps = {

}

export default List

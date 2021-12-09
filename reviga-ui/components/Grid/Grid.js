import styled from '@emotion/styled';
import { grid, layout, space } from 'styled-system';
import theme from 'theme';

const CSSGrid = styled.div`
    ${grid};
    ${layout};
    ${space};
    display: grid;
    label: grid;
`

const Grid = (props) => {
    return <CSSGrid {...props}/>
}

Grid.defaultProps = {
    ...theme.grid.defaults
}

export default Grid;
import styled from '@emotion/styled';
import {color, space, layout, border, textAlign, background } from 'styled-system';

const Box = styled.div`
    ${space}
    ${layout}
    ${color}
    ${border}
    ${textAlign}
    ${background}
    label: box;
`;

export default Box;
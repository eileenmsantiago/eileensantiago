import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from 'styled-system';
import theme from 'theme';
import { variant, typography, space, layout } from 'styled-system';

const Text = styled.span`
    ${variant({
        variants: theme.typography
    })};
    ${color};
    ${typography};
    ${space};
    ${layout}
    label: text;
`


export default {
    Text
}
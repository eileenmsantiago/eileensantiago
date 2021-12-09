import styled from '@emotion/styled';
import { variant, space, color, layout, background, border } from 'styled-system';
import theme from 'theme';

export default {
    Wrapper: styled.div`
        ${color};
        ${space};
        ${layout};
        ${background};
        label: container_wrapper;
    `,
    Container: styled.div`
        ${space};
        ${background};
        ${border};
        ${variant({
            variants: theme.container.variants
        })};
        margin: 0 auto;
        label: container_content;
    `
};
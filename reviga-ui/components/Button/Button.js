import Link from 'next/link';
import styled from '@emotion/styled';
import { space, variant } from 'styled-system';
import { button } from 'theme';

const StyledButton = styled.button`
    ${space}
    ${variant({
        variants: button.variants
    })};
    ${variant({
        prop: 'size',
        variants: button.size
    })};
    cursor: pointer;
    border: none;
    label: button;
`;

const Button = (props) => {

    if(props.as === 'a') {
        return (
            <Link href={props.href}>
                <StyledButton {...props}/>
            </Link>
        )
    } else {
        return <StyledButton {...props}/>
    }
}

Button.defaultProps = {
    ...button.defaults
}
export default Button;
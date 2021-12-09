import {default as NextLink} from 'next/link';
import { color } from 'styled-system';
import styled from '@emotion/styled';


const CSSLink = styled.a`
  ${color};
  cursor: pointer;
  label: link;
`
export default function Link({color, href, children, classNames = {}}) {

  return (
      <NextLink href={href} passHref>
          <CSSLink color={color} className={classNames.link}>
            {children}
          </CSSLink>
      </NextLink>
  )
}

import NextImage from 'next/image';
import cx from 'classnames';
import css from 'styled-jsx/css';

const Image = (props) => {
  return (
      <NextImage {...props}/>
  )
}

Image.defaultProps = {
    alt: ""
}

export default Image;

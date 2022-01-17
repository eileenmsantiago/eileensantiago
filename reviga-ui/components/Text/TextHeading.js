import TextBase from './TextBase';
import { heading } from 'theme';

const Heading = (props) => {

  let variantProps = {};
  if(heading.variants && heading.variants[props.variant]) {
    variantProps = heading.variants[props.variant]
  }

  const headingProps = {
    as: props.as || props.variant,
    ...variantProps,
    ...props
  }

  return (
    <TextBase {...headingProps}/>
  )
}
  
Heading.defaultProps = {
    ...heading.defaults
}

export default Heading;
  
import TextBase from './TextBase';
import theme from 'theme';
const Paragraph = (props) => {
    return (
      <TextBase {...props}/>
    )
}
  
Paragraph.defaultProps = {
    as: "p",
    ...theme.paragraph.defaults
}

export default Paragraph;
  
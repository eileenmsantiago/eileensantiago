import CSS from './TextBase.styles';
import theme from 'theme';

const Text = (props) => {
  return (
    <CSS.Text {...props}/>
  )
}

Text.defaultProps = {
  ...theme.text.defaults
}

export default Text;
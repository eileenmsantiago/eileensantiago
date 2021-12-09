import TextBase from './TextBase';
import TextParagraph from './TextParagraph';
import TextHeading from './TextHeading';

const Text = TextBase;
Text.Paragraph = TextParagraph;
Text.Heading = TextHeading;

export default Text;
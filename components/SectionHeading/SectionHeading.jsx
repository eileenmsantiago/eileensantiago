import {Heading} from '../'
const SectionHeading = (props) => {

  const { heading= "", subheading, isDark } = props;

  let color;
  if(isDark) {
    color = "white";
  }
  return (
    <>
      <Heading level="h3" style="h5" color={color} classes={{root: "mb-2"}}>{heading}</Heading>
      <Heading level="h3" style="h2" color={color} classes={{root: "mb-6"}}>{subheading}</Heading>
    </>
  )
}

export default SectionHeading

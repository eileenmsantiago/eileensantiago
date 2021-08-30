import cx from "classnames"
import css from "./Heading.module.scss"

const Heading = (props) => {

  const { classes, level, children, color, weight } = props
  
  let { style } = props
  // Default style to level value
  let headingStyle
  if (!style) {
    headingStyle = level
  } else {
    headingStyle = style
  }

  const Tag = level

  return (
    <Tag
      className={cx(css.root, css[headingStyle], css[color], css[weight], {
        [classes.root]: !!classes.root,
      })}
    >
      {children}
    </Tag>
  )
}

Heading.defaultProps = {
  classes: {},
  level: "h3",
}

export default Heading

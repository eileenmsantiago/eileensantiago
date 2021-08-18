import cx from "classnames"
import css from "./Text.module.scss"

const Text = (props) => {
  const { classes, children, style, color, as } = props
  const Tag = as

  return (
    <Tag
        className={cx(
          css[style],
          css[color],
          css[as],
          {
            [classes.root]: !!classes.root
          }
        )}
    >
      {children}
    </Tag>
  )
}

Text.defaultProps = {
  classes: {},
  as: "span",
  style: "md",
  color: "black",
}

export default Text

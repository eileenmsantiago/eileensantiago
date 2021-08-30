import cx from "classnames"
import css from "./Button.module.scss"

const Button = (props) => {
  const { classes, children, style, color, as, href, type } = props
  const Tag = as;

  return (
    <Tag
        href={as === 'a' && !!href ? href : undefined}
        className={cx(css.root, css[style], css[color], css[type], {
        [classes.root]: !!classes.root,
      })}
    >
      {children}
    </Tag>
  )
}

Button.defaultProps = {
  classes: {},
  as: "button",
  style: "md",
  color: "black",
  type: "primary"
}

export default Button

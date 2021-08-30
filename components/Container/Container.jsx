import cx from 'classnames';
import css from './Container.module.scss';
const Container = ({children, width, paddingY, paddingX, classes, containerClasses, bgColor, bgColorHex}) => {

  const styleObj = {};
  if(bgColorHex) {
    styleObj.backgroundColor = bgColorHex;
  }
  return (
    <div
      style={styleObj}
      className={cx(
      {
        [css[`bg_${bgColor}`]]: !!bgColor && !bgColorHex,
        [css[`paddingY_${paddingY}`]]: paddingY !== 'none',
      },
      classes.root
    )}>
      <div className={cx(
        "container",
        css.container,
        {
          [css[`width_${width}`]]: !!width,
          [css[`paddingX_${paddingX}`]]: !!paddingX,
        },
        classes.container
      )}>
        {children}
      </div>
    </div>
  )
}

Container.defaultProps = {
  classes: {},
  paddingY: 'md'
}

export default Container;

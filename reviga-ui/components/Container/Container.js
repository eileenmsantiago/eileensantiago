import CSS from './Container.styles'
import theme from 'theme'
import {background, padding} from 'styled-system';


const wrapperPropNames = [
  'as',
  'className',
  'bg',
  'height',
  ...background.propNames
]

const containerPropsNames = [
  'variant',
  'maxWidth',
  'p',
  'py',
  'px'
]

const Container = (props) => {

  let wrapperProps = {
    ...props.wrapperProps
  };
  wrapperPropNames.forEach(propName => {
    wrapperProps[propName] = props[propName]
  })

  let containerProps = {
    ...props.containerProps
  };

  containerPropsNames.forEach(propName => {
    containerProps[propName] = props[propName]
  })


  return (
    <CSS.Wrapper {...wrapperProps} className={props.classNames.wrapper}>
        <CSS.Container className={props.classNames.container} {...containerProps}>
            {props.children}
        </CSS.Container>
    </CSS.Wrapper>
  )
}

Container.defaultProps = {
  ...theme.container.defaults,
  classNames: {
    wrapper: undefined,
    container: undefined
  },
}

export default Container;
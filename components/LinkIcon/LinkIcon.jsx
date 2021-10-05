import { Heading, Text } from '..'
import cx from "classnames"
import css from "../AboutLayout/AboutLayout.module.scss"
import { facts, motivationalFacts, skills, values } from "../../data/about";

const LinkIcon = (props) => {

  const { children, href, classes, color, openNewTab, isDark } = props
  const linkTextClass = isDark ? css.linkTextWhite : css.linkText

  const svg = isDark ? "/assets/ui-elements/arrow-white.svg" : "/assets/ui-elements/arrow.svg"
  return (
    <div className="flex flex-row space-x-4">
      <Text as="div" style="lg-md" color={color ? color : undefined}>
        <img className="mx-auto" src={svg}/>
      </Text>
      <Text as="div" style="lg" color={color ? color : undefined}>
        <a href={href} target="_blank" className={cx(css.linkUnderline, classes.link, linkTextClass)}>
          {children}
        </a>
      </Text>
    </div>
  )
}

LinkIcon.defaultProps = {
  classes: {}
}

export default LinkIcon

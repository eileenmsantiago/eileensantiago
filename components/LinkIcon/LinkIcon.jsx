import { Heading, Text } from '..'
import cx from "classnames"
import css from "./LinkIcon.module.scss"
import { facts, motivationalFacts, skills, values } from "../../data/about";

const LinkIcon = (props) => {

  const { children, href, classes, color } = props

  console.log(classes)

  return (
    <div className="flex flex-row space-x-4">
      <Text as="p" style="lg-md" color={color ? color : undefined}>
        ↗ 
      </Text>
      <Text as="p" style="lg" color={color ? color : undefined}>
        <a href={href} className={classes.link}>
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

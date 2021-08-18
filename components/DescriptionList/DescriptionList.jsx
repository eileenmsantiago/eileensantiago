import {Heading, Text} from '../'
import cx from "classnames"
import css from "./DescriptionList.module.scss"

const DescriptionList = (props) => {
  const { items, isDark } = props

  let color;
  if(isDark) {
    color = "white";
  }
  return (
    <div>
      {items.map((item, idx) => (
        <div className="mb-8">
          <div className="flex flex-col">
            <div className="flex space-x-6 left-side">
              <Heading level="h4" style="h3" color={color}>{`0${idx+1}`}</Heading>
              <Text style="lg-md" color={color}>{item.title}</Text>
            </div>
          </div>
          <Text as="p" color="grey-dark" classes={{root: 'pl-12'}}>
            {item.description}
          </Text>
        </div>
      ))}
    </div>
  )
}

DescriptionList.defaultProps = {
  classes: {},
  as: "button",
  style: "md",
  color: "black",
  type: "primary"
}

export default DescriptionList

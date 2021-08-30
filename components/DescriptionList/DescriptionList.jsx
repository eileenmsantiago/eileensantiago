import { Text } from '../'
import cx from "classnames"
import css from "./DescriptionList.module.scss"

const DescriptionList = (props) => {
  const { items, isDark } = props

  let color;
  let descriptionColor = "grey-dark";
  if(isDark) {
    color = "white";
    descriptionColor = "grey-light"
  }
  return (
    <div className="mb-8">
      {items.map((item, idx) => (
        <div>
          <div className="flex flex-col">
            <div className="flex pb-4 space-x-6 left-side">
              <Text style="h4" color={color}>{`0${idx+1}`}</Text>
              <Text style="lg-md" color={color}>{item.title}</Text>
            </div>
          </div>
          {item.description && (
            <Text as="div" color={descriptionColor} classes={{root: 'pl-12 mb-8'}}>
              {item.description}
            </Text>
          )}
          {item.additionals && (
            <Text as="p" color={descriptionColor} style="h3" classes={{root: 'pl-12 mb-16'}}>
              {item.additionals}
            </Text>
          )}
        </div>
      ))}
    </div>
  )
}

DescriptionList.defaultProps = {
  items: [],
  classes: {},
  as: "button",
  style: "md",
  color: "black",
  type: "primary"
}

export default DescriptionList

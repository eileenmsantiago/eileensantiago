import { Text } from '../'
import cx from "classnames"
import css from "./DescriptionList.module.scss"

const DescriptionList = (props) => {
  const { items, isDark, hideNumber } = props

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
          <div className="flex flex-row space-x-6">
            {!hideNumber && (
              <div className="flex pb-4 left-side">
                <Text style="h4" color={color}>
                  {`0${idx+1}`}
                </Text>
              </div>
            )}
            <div>
              <Text as="div" style="lg-md" color={color} classes={{root: 'mb-4'}}>
                {item.title}
              </Text>
              {item.description && (
                <Text as="div" color={descriptionColor} classes={{root: 'mb-8'}}>
                  {item.description}
                </Text>
              )}
              {item.additionals && (
                <Text as="p" color={descriptionColor} style="h3" classes={{root: 'mb-16'}}>
                  {item.additionals}
                </Text>
              )}
            </div>
          </div>
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

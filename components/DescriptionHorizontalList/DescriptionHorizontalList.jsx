import { Text } from '..'
import cx from "classnames"

const DescriptionHorizontalList = (props) => {
  const { items, isDark } = props

  let color;
  if(isDark) {
    color = "white";
  }
  return (
    <div className="flex mb-8 space-x-8">
      {items.map((item, idx) => (
        <div className="flex space-x-8">
          <div className="flex flex-row">
            <div className="flex flex-col pb-4">
              <Text style="lg-md" color="grey-light" classes={{root: 'mb-8'}}>
                {`0${idx+1}`}
              </Text>
              <Text style="lg-md" color={color}>
                {item.title}
              </Text>
            </div>
          </div>
          {item.description && (
            <Text as="div" color="grey-dark" classes={{root: 'mb-8'}}>
              {item.description}
            </Text>
          )}
          {item.additionals && (
            <Text as="p" color="grey-dark" style="h3" classes={{root: 'mb-16'}}>
              {item.additionals}
            </Text>
          )}
        </div>
      ))}
    </div>
  )
}

DescriptionHorizontalList.defaultProps = {
  items: [],
  classes: {},
  as: "button",
  style: "md",
  color: "black",
  type: "primary"
}

export default DescriptionHorizontalList

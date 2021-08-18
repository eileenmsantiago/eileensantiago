import {Heading, Text} from '../'
import cx from "classnames"
import css from "./DescriptionGrid.module.scss"

const DescriptionGrid = (props) => {
  const { items, color } = props

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
      {items.map(item => {
        let description = item.description;
        if(description instanceof Function) {
          description = description();
        }
        return (
          <div className="col-span-1">
            <Text as="div" style="h5" color="grey-dark" classes={{root: "mb-5 md:mb-2"}}>{item.title}</Text>
            <Text>
              {description}
            </Text>
          </div>
        )
      })}
    </div>
  )
}

DescriptionGrid.defaultProps = {
  items: []
}

export default DescriptionGrid

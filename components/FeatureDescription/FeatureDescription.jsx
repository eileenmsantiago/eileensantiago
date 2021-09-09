import { Text } from '../'
import cx from "classnames"

const FeatureDescription = (props) => {
  const { items, hideNumber, imageUrl } = props

  let color;
  let descriptionColor = "grey-dark";

  return (
    <div className="mb-8">
      {items.map((item, idx) => {
        const renderImg = () => <img src={item.imageUrl} className="mb-16"/>;
        const renderImgLeft = idx % 2 === 0;
        return (
          <div className="flex flex-row mb-24 space-x-16 sm:flex-col sm:space-x-0 md:space-x-6 sm:mb-8">
            {renderImgLeft && renderImg() }
            <div className="flex flex-row my-auto space-x-6 sm:space-x-0 sm:flex-col">
              {!hideNumber && (
                <div className="flex pb-4">
                  <Text style="h2" color="grey-medium">
                    {`0${idx+1}`}
                  </Text>
                </div>
              )}
              <div>
                <Text as="div" style="h2" color={color} classes={{root: 'mb-4'}}>
                  {item.title}
                </Text>
                {item.description && (
                  <Text as="div" style="lg" color={descriptionColor} classes={{root: 'mb-8'}}>
                    {item.description}
                  </Text>
                )}
              </div>
            </div>
            {!renderImgLeft && renderImg() }
          </div>
        )
      })}
    </div>
  )
}

FeatureDescription.defaultProps = {
  items: [],
  classes: {},
  color: "black",
}

export default FeatureDescription

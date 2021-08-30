import { Text } from '../'

const Quote = (props) => {

  const { children } = props;

  return (
    <>
      <div className="p-8 mb-12 bg-gray-50">
        <Text as="div" style="lg-md" color="black">
          {children}
        </Text>
      </div>
    </>
  )
}

export default Quote

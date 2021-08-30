import cx from "classnames"
import css from "./ResumeItem.module.scss"
import { Heading, Text } from '..'
import Link from "next/link"

const ResumeItem = (props) => {

  const { children, company, date, href, position, classes } = props

  return (
    <div className="flex-col">
      <div className="flex sm:flex-col">
        <div className="mr-4">
          <Link href={href}>
            <Heading level="h5" style="lg-md">
              {company}
            </Heading>
          </Link>
        </div>
        <div className="ml-auto md:ml-0">
          <Text as="p" style="lg">
            {position} 
          </Text>
        </div>
      </div>
      <Text color="grey-dark">
        {date}
      </Text>
      <hr />
    </div>
  )
}

export default ResumeItem

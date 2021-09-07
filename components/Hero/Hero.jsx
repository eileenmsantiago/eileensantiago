import React from 'react'
import cx from 'classnames'
import {Heading, Text} from '../index'
import css from './Hero.module.scss'

export default function Hero(props) {

  const { primaryColor, featuredImagePath, title, description, tags } = props;

  return (
    <div style={{backgroundColor: primaryColor}}>
      <div className="container px-4 mx-auto">
        <Heading level="h1">A</Heading>
        <Text>VIEW SELECTED WORK</Text>
        <Animate>
          <img className={cx(css.projectImage, ['mx-auto mb-4'])} src={featuredImagePath}/>
        </Animate>
      </div>
    </div>
  )
}

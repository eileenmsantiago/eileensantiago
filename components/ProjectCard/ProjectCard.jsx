import React from 'react'
import cx from 'classnames';
import css from './ProjectCard.module.scss';
import { Heading, Text } from '../index.js';
import Link from 'next/link'

export default function ProjectCard(props) {

  const { pageUrl, primaryColor, featuredImagePath, title, description, tags } = props.data;

  return (
    <div className="mb-24">
      <a className={css.link} href={pageUrl}>
        <div className={css.wrapper}>
          <div className="mb-4 overflow-hidden" style={{backgroundColor: primaryColor}}>
            <img className={cx(css.projectImage, ['mx-auto'])} src={featuredImagePath}/>
          </div>
          <div className="flex flex-row space-x-6 md:space-x-0 md:flex-col sm:p-4">
            <div className={cx(css.title,"flex items-center pb-4")}>
              <Text style="h2">{title}</Text>
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <Text style="lg-md">
                  {description}
                </Text>
              </div>
              <div>
                {tags.map(tag => (
                  <Text 
                    color="grey-dark"
                    className="inline mr-4"
                    classes={{root:"mr-6"}}
                  >
                    {tag} 
                  </Text>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

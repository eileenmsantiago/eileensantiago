import React from 'react'
import cx from 'classnames';
import { Text } from 'reviga-ui';
import css from './ProjectCard.module.scss';
import { Heading, Tag, LinkIcon } from '../index.js';
import Link from 'next/link'

export default function ProjectCard(props) {

  const { pageUrl, primaryColor, featuredImagePath, title, description, tags, date } = props.data;

  return (
    <div className="mb-24">
      <a className={css.link} href={pageUrl}>
        <div className={css.wrapper}>
          <div className="mb-4 overflow-hidden" style={{backgroundColor: primaryColor}}>
            <img className={cx(css.projectImage, ['mx-auto'])} src={featuredImagePath}/>
          </div>
          <div className="flex flex-row space-x-4 md:space-x-0 md:flex-col">
            <div className="flex flex-col sm:flex-row">
              <div className={cx(css.title, 'flex flex-col')}>
                <div className="flex flex-row">
                  <Text.Heading variant="h4">{title}</Text.Heading>
                  <div className="hidden ml-auto md:block">
                    <LinkIcon>
                      <Text variant="bodyLg">
                        Read Case Study
                      </Text>
                    </LinkIcon>
                  </div>
                </div>
                <Text variant="bodyLg">{date}</Text>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex-row">
                <div className="mb-4 md:ml-auto">
                  <Text variant="bodyLg">
                    {description}
                  </Text>
                </div>
              </div>
              <div>
                {tags.map(tag => (
                  <Text variant="body" color="grays.5">
                    {tag}
                  </Text>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="block ml-auto md:hidden">
                <LinkIcon>
                  <Text variant="bodyLg">
                    Read Case Study
                  </Text>
                </LinkIcon>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

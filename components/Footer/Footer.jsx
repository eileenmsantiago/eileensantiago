import Link from 'next/link'
import css from './Footer.module.scss';
import cx from 'classnames';
import footerData, { socials, socialLinks } from '../../data/footer';
import { skills } from '../../data/me';
import Heading from '../Heading';
import Text from '../Text';

export default function Footer(props) {

  return (
    <footer id={css.footer} className="py-8 lg:py-24">
      <div className={cx('pb-4 md:pb-12',css.marquee)}>
        <div className="marqueeText">
          {skills.map(skill => (
            <Text 
              style="h1"
              color="grey-light">
              {skill} / 
            </Text>
          ))}
        </div>
      </div>
      <div className="container px-4">
        <div className='flex sm:flex-col'>
          <div className="flex-auto sm:mb-8">
            <Heading level="h2">
              Say hello
            </Heading>
            <a href="mailto:eileenmaesantiago@gmail.com">
              <Text
                style="lg"
                color="grey-dark">
                eileenmaesantiago@gmail.com
              </Text>
            </a>
          </div>
          <div className="flex-auto">
            <a 
              className="mb-4"
              target="_blank"
              href="/assets/resume/Resume_EileenSantiago.pdf">
              <Text
                style="lg"
                color="grey-light"
                >
                Download my resume
              </Text>
            </a>
          </div>
          <div className="flex-auto">
            <Text
              style="lg"
              color="grey-light">
              {socials.map(social => (
                <Link href={social.link}>
                  {social.name}
                </Link>
              ))}
            </Text>
          </div>
        </div>
        <Text>
        </Text>
      </div>
    </footer>
  )
}

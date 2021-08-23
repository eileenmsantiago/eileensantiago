import Link from 'next/link'
import css from './Footer.module.scss';
import cx from 'classnames';
import footerData, { socialsList } from '../../data/footer';
import Heading from '../Heading';
import Text from '../Text';
import Container from '../Container';

export default function Footer(props) {

  return (
    <footer id={css.footer}>
      <Container>
        {/* <div className={cx('pb-4 md:pb-12',css.marquee)}>
          <div className="marqueeText">
            <Text 
              style="h1"
              color="grey-light">
                <Link href="https://calendly.com/eileenmae/60min">
                  LET'S CONNECT ↗ LET'S CONNECT ↗ LET'S CONNECT ↗ LET'S CONNECT ↗ LET'S CONNECT ↗ LET'S CONNECT ↗ 
                </Link>
            </Text>
          </div>
        </div> */}
        <div className="container px-4">
          <div className="flex mb-16 md:flex-col">
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
                  color="white"
                  >
                  Download my resume
                </Text>
              </a>
            </div>
            <div className="flex flex-col">
              <Text
                style="lg"
                color="white">
                {socialsList.map(social => (
                  <div className="flex flex-row">
                    <Link href={social.link}>
                      {social.name}
                    </Link>
                  </div>
                ))}
              </Text>
            </div>
          </div>
          <Text
            color="white">
              © 2021 Designed and coded by Eileen Mae
          </Text>
        </div>
      </Container>
    </footer>
  )
}

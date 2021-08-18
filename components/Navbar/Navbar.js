import {useState, useEffect} from 'react';
import {useWindowScroll} from 'react-use';
import Link from 'next/link'
import css from './Navbar.module.scss';
import cx from 'classnames';
import { Text } from '../index.js';
import BurgerMenu from '../BurgerMenu';

export const Y_BREAKPOINT = 40;
export const NAV_HEIGHT = '6.25rem';

export default function Navbar(props) {

  const {y} = useWindowScroll();
  const [overlap, setOverlap] = useState(false);
  
  useEffect(() => {
    if(y > Y_BREAKPOINT) {
      setOverlap(true)
    } else {
      setOverlap(false)
    }
  }, [y])

  return (
    <nav className={cx(css.nav, {
      [css.overlap]: overlap
    })}>
      <div className={"container flex"}>
        <Text color="black" classes={{root: 'my-auto'}}>
          <Link href="/" className={css.linkText}>
            EILEEN MAE
          </Link>
        </Text>
        <div className="my-auto ml-auto">
          <ul className={cx('my-auto flex sm:hidden', css.links)}>
            <li className={css.linkItem}>
              <Link href="/" className={css.linkText}>
                Work
              </Link>
            </li>
            <li className={css.linkItem}>
              <Link href="/about" className={css.linkText}>
                About me
              </Link>
            </li>
            <li className={css.linkItem}>
              <Link href="/playground" className={css.linkText}>
                Other
              </Link>
            </li>
          </ul>
          <div className="flex hidden sm:block">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

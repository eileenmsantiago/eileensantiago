import {useState, useEffect} from 'react';
import {useWindowScroll} from 'react-use';
import { Text } from '../index.js';
import cx from 'classnames';
import css from './Navbar.module.scss';
import BurgerMenu from '../BurgerMenu';

export const Y_BREAKPOINT = 40;

export default function Navbar(props) {
  const { isDark } = props;
  const {y} = useWindowScroll();
  const [overlap, setOverlap] = useState(false);
  
  useEffect(() => {
    if(y > Y_BREAKPOINT) {
      setOverlap(true)
    } else {
      setOverlap(false)
    }
  }, [y])

  let linkTextClass = css.linkText;
  if(isDark && !overlap) {
    linkTextClass = css.linkTextWhite;
  }

  return (
    <nav className={cx(css.nav, {
      [css.overlap]: overlap
    })}>
      <div className={"container flex"}>
        <Text color="black" classes={{root: 'my-auto'}}>
          <a href="/" className={linkTextClass}>
            Eileen Mae
          </a>
        </Text>
        <div className="my-auto ml-auto">
          <ul className={cx('my-auto flex sm:hidden', css.links)}>
            <li className={css.linkItem}>
              <a href="/" className={linkTextClass}>
                Work
              </a>
            </li>
            <li className={css.linkItem}>
              <a href="/about" className={linkTextClass}>
                About
              </a>
            </li>
            <li className={css.linkItem}>
              <a href="/playground" className={linkTextClass}>
                Other
              </a>
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

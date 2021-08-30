import React from "react";
import {useState} from 'react';
import Link from 'next/link'
import cx from 'classnames';
import css from './BurgerMenu.module.scss'
import {Text} from '../index';

const BurgerMenu = (props) => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  return (
    <>
      <button className="" onClick={() => setShowBurgerMenu(true)}>
        <img src="/assets/ui-elements/menu.svg"/>
      </button>
      {showBurgerMenu && (
        <div className={css.burgerBar}>
          <button className="w-8 h-8 ml-auto" onClick={() => setShowBurgerMenu(false)}>
            <img src="/assets/ui-elements/close.svg"/>
          </button>
          <ul className={cx('mx-auto', css.menuItem, css.links)}>
            <li className="">
              <a href="/">
                <Text color="white">Work</Text>
              </a>
            </li>
            <li className="">
              <a href="/about">
                <Text color="white">About me</Text>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default BurgerMenu

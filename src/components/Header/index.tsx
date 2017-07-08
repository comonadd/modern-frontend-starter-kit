/**
 * @file index.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import HeaderLogotype from './components/Logotype';
import HeaderNavigation from './components/Navigation';

const style = require('./style');

/**
 * @summary
 * The header component
 *
 * @return {React.Component}
 */
const Header = () =>
  <header className={style.header}>
    <HeaderLogotype />
    <HeaderNavigation />
  </header>;

export default Header;

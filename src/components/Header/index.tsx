/**
 * @file index.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';

const style = require('./style');

/**
 * @summary
 * The header logotype.
 *
 * @return {React.Component}
 */
const HeaderLogotype = () =>
  <div className={style.header__logotype}>
    Modern Frontend Starter Kit
  </div>;

interface HeaderNavigationProps {}

interface HeaderNavigationState {
  navActive: boolean;
}

/**
 * @summary
 * The header navigation component.
 *
 * @return {React.Component}
 */
class HeaderNavigation extends React.Component<HeaderNavigationProps, HeaderNavigationState> {
  static projectGithubLink: string = "https://github.com/wrongway4you/modern-frontend-starter-kit";
  static items: any = {
    "Source Code": `${HeaderNavigation.projectGithubLink}`,
    "Issues": `${HeaderNavigation.projectGithubLink}/issues`,
    "Pull request": `${HeaderNavigation.projectGithubLink}/pulls`,
  };

  constructor(...args: any[]) {
    super(...args);
    this.state = {
      navActive: false,
    };
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  toggleMobileNavigation() {
    this.setState({
      ...this.state,
      navActive: !this.state.navActive,
    });
  }

  render() {
    const navClassnames = classnames({
      [style.header__nav]: true,
      [style.active]: this.state.navActive,
    });

    return (
      <div className={navClassnames}>
        <div className={style.header__nav__items}>
          {Object.keys(HeaderNavigation.items).map(name =>
            <div key={name} className={style.header__nav__items__item}>
              <a href={HeaderNavigation.items[name]}>{name}</a>
            </div>)}
        </div>
        <div className={style.header__nav__mobileMenuBtn} onClick={this.toggleMobileNavigation}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    );
  }
}

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

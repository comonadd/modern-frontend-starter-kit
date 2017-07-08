/**
 * @file index.tsx
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';
import classnames from 'classnames';

import Item, {ItemProps} from './components/Item';

const style = require('../../style');

export interface NavigationProps {}

export interface NavigationState {
  navActive: boolean;
}

/**
 * @summary
 * The navigation component.
 *
 * @return {React.Component}
 */
export default class Navigation extends React.Component<NavigationProps, NavigationState> {
  static projectGithubLink: string = "https://github.com/wrongway4you/modern-frontend-starter-kit";
  static items: any = [
    {
      name: "Source Code",
      rel: false,
      url: `${Navigation.projectGithubLink}`,
    },
    {
      name: "Issues",
      rel: false,
      url: `${Navigation.projectGithubLink}/issues`,
    },
    {
      name: "Pull request",
      rel: false,
      url: `${Navigation.projectGithubLink}/pulls`,
    },
  ];

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
          {Navigation.items.map((item: ItemProps) =>
            <Item key={item.url} {...item} />
          )}
        </div>
        <div className={style.header__nav__mobileMenuBtn} onClick={this.toggleMobileNavigation}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    );
  }
}

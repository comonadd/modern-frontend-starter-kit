/**
 * @file index.tsx
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';
import { Link } from 'react-router-dom';

const style = require('../../../../style');

export interface ItemProps {
  name: string;
  url: string;
  rel: boolean;
}

/**
 * @summary
 * The navigation item component.
 *
 * @return {React.Component}
 */
export default (props: ItemProps) =>
  <div key={props.url} className={style.header__nav__items__item}>
    {props.rel ? <Link to={props.url}>{props.name}</Link> :
     <a href={props.url}>{props.name}</a>}
  </div>;

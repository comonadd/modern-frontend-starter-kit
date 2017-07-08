/**
 * @file index.tsx
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';

const style = require('../../style');

export interface LogotypeProps {}

/**
 * @summary
 * The logotype component.
 *
 * @return {React.Component}
 */
export default (props: LogotypeProps) =>
  <div className={style.header__logotype}>
    Modern Frontend Starter Kit
  </div>;

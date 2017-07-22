/**
 * @file action.ts
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import { Action } from 'redux';

/**
 * @summary
 * The types of the possible actions.
 *
 * @description
 * All the actions of the store should be enumerated there.
 */
export const ActionType = {
};

/**
 * @summary
 * The action type.
 */
export interface IAction extends Action {
  type: string;
  payload: any;
};

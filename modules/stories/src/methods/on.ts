import { action } from '@storybook/addon-actions'

/**
 * Shorthand method for creating an action event handler.
 * When the event is fired, an entry is logged in the "Action" Storybook tab.
 * @param actionName The name of the associated event.
 */
export const on = (actionName: string) => (...params: any[]) => action(actionName)(...params)

export default on

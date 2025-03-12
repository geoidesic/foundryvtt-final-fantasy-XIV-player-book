import { MODULE_ID, MODULE_CODE } from '../helpers/constants';


export function registerSettings(app) {
  /** World Settings */

  /** User settings */
  dontShowWelcome()

}

function dontShowWelcome() {
  game.settings.register(MODULE_ID, 'dontShowWelcome', {
    name: game.i18n.localize(`${MODULE_CODE}.Setting.DontShowWelcome.Name`),
    hint: game.i18n.localize(`${MODULE_CODE}.Setting.DontShowWelcome.Hint`),
    scope: 'user',
    config: true,
    default: false,
    type: Boolean,
  });
}

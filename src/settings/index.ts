import { MODULE_ID, MODULE_CODE } from '../helpers/constants';


export function registerSettings(app): void {
  log.i("Building module settings");

  /** World Settings */

  /** User settings */
  dontShowWelcome()

}

function dontShowWelcome() {
  game.settings.register(, MODULE_ID, 'dontShowWelcome', {
    name: game.i18n.localize(`${, MODULE_CODE}.Setting.DontShowWelcome.Name`),
    hint: game.i18n.localize(`${MODULE_ID}.Setting.DontShowWelcome.Hint`),
    scope: 'user',
    config: true,
    default: false,
    type: Boolean,
  });
}

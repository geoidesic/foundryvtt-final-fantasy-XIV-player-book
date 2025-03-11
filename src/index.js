import '~/src/styles/init.sass'; // Import any styles as this includes them in the build.

import WelcomeApplication from '~/src/components/applications/WelcomeApplication.js';
import { MODULE_ID } from '~/src/helpers/constants';
import { log } from '~/src/helpers/utility';
import { registerSettings } from '~/src/settings';

window.log = log;
log.level = log.DEBUG;

Hooks.once("init", (app, html, data) => {
  log.i('Initialising');
  CONFIG.debug.hooks = true;
  registerSettings(app);
});

Hooks.once("ready", (app, html, data) => {
  if (!game.modules.get(MODULE_ID).active) {
    log.w('Module is not active');
    return;
  }
  if (!game.settings.get(MODULE_ID, 'dontShowWelcome')) {
    new WelcomeApplication().render(true, { focus: true });
  }
});

Hooks.on('changeSidebarTab', (app) => {
  log.d('changeSidebarTab', app);
});

Hooks.on('renderSidebarTab', (app, html, data) => {
  log.d('renderSidebarTab', app, html, data);
});

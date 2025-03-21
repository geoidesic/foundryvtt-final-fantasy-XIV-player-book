

import WelcomeAppShell from './WelcomeAppShell.svelte';
import { SvelteApplication } from "@typhonjs-fvtt/runtime/svelte/application";
import { MODULE_ID, MODULE_TITLE } from "~/src/helpers/constants"
import { version } from "../../../module.json";

export default class WelcomeApplication extends SvelteApplication
{
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/interfaces/client.ApplicationOptions.html
    */
   static get defaultOptions()
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
        id: `${MODULE_ID}-welcome`,
        classes: ['no-padding'],
         resizable: true,
         minimizable: true,
         width: 502,
         height: 835,
         headerIcon: 'systems/foundryvtt-final-fantasy/assets/aardvark-claw.webp',
         title: game.i18n.localize(`${MODULE_TITLE} v${version}`),
         svelte: {
            class: WelcomeAppShell,
            target: document.body,
            intro: true,
            props: {
               version  // A prop passed to HelloFoundryAppShell for the initial message displayed.
            }
         }
      });
   }
}
<script>
  import { onMount, getContext } from "svelte";
  import { fade, scale }        from 'svelte/transition';
  import { ApplicationShell }   from '#runtime/svelte/component/core';
  import { localize } from "~/src/helpers/utility";
  import { MODULE_ID, MODULE_TITLE } from "~/src/helpers/constants";

  export let elementRoot = void 0;
  // export let version = void 0;

  const application = getContext('#external').application;

  const handleChange = (event) => {
    game.settings.set(MODULE_ID, 'dontShowWelcome', event.target.checked);
  }


  let draggable = application.reactive.draggable;
  draggable = true

  $: application.reactive.draggable = draggable;
  $: dontShowWelcome = game.settings.get(MODULE_ID, 'dontShowWelcome');

  onMount(async () => {
  });
  
</script>

<svelte:options accessors={true}/>

<template lang="pug">
  ApplicationShell(bind:elementRoot)
    main
      img(src="/modules/{MODULE_ID}/assets/FFXIV-player-book-cover.webp" alt="{MODULE_TITLE}") 
      .flexrow.inset.justify-vertical.mb-sm.dont-show(data-tooltip="{localize('Setting.DontShowWelcome.Hint')}")
        .flex0
          input(type="checkbox" on:change="{handleChange}" label="{localize('Setting.DontShowWelcome.Name')}" bind:checked="{dontShowWelcome}") 
        .flex
          span {localize('Setting.DontShowWelcome.Name')}
    footer
      .right
        img.pt-sm.mr-md(src="/systems/foundryvtt-final-fantasy/assets/aardvark-logo.webp" alt="Aardvark Logo" height="40" width="40" style="fill: white; border: none; width: auto;")
      .left.pt-sm
        h4 {MODULE_TITLE} 
        span Foundry conversion by 
        a(href="https://www.aardvark.games") Aardvark Games

</template>

<style lang="sass">
  @use "../../styles/Mixins.scss" as mixins

  main
    overflow-y: auto
    padding: 0

    img
      width: 545
      height: 860
      object-fit: cover

  .dont-show
    font-size: smaller
    input
      cursor: pointer

  .white
    filter: invert(1)
    
  footer
    border-top: 8px ridge var(--border-shadow)
    display: grid
    grid-column-gap: 1rem
    grid-template-columns: 1fr 2fr
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background-color: #333
    color: white
    text-align: center
    padding: 1em 1em 0.5em 1em
    font-size: 0.8em
    line-height: 1.5em
    z-index: 3
    a
      color: white
      text-decoration: underline
      &:hover
        color: #ccc
</style>

// ==UserScript==
// @name         Make GitHub PR and Issue Titles Clickable
// @namespace    https://github.com/Moulick
// @version      0.5
// @description  Make GitHub PR and Issue Titles Clickable
// @author       Moulick Aggarwal
// @supportURL   https://github.com/Moulick/userscripts/issues
// @match        https://github.com/*/*/issues/*
// @match        https://github.com/*/*/pull/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @attribution  https://github.com/kidonng
// ==/UserScript==


(function () {
  'use strict';

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return

    const title = event.target.closest('h1[data-component="PH_Title"] .markdown-title')
    if (title) {
      document.querySelector('[data-testid="edit-issue-title-button"]')?.click()
      title.closest('h1[data-component="PH_Title"]')?.querySelector('button[data-component="IconButton"]:has(.octicon-pencil)')?.click()
    }
  }, true)

  document.addEventListener('keydown', (event) => {
    const input = document.activeElement
    if (event.key === 'Escape' && location.pathname.includes('/pull/') && input instanceof Element && input.matches('header form input[data-component="input"][type="text"]')) {
      const save = input.closest('header form')?.querySelector('button[type="submit"][name="Save"]')
      save?.parentElement?.nextElementSibling?.querySelector('button[type="button"]')?.click()
    }
  }, true)
})();

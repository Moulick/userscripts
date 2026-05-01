// ==UserScript==
// @name         Make GitHub PR and Issue Titles Clickable
// @namespace    https://github.com/Moulick
// @version      0.3
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
    const title = event.target.closest('h1[data-component="PH_Title"] .markdown-title')
    if (title) {
      document.querySelector('[data-testid="edit-issue-title-button"]')?.click()
      title.closest('h1[data-component="PH_Title"]')?.querySelector('button')?.click()
    }
  }, true)
})();

// ==UserScript==
// @name         Make GitHub PR and Issue Titles Clickable
// @namespace    https://github.com/Moulick
// @version      0.2
// @description  Make GitHub PR and Issue Titles Clickable
// @author       Moulick Aggarwal
// @supportURL   https://github.com/Moulick/userscripts/issues
// @match        https://github.com/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @attribution  https://github.com/kidonng
// ==/UserScript==


(function () {
  'use strict';

  function init() {
    document.querySelector('.js-issue-title')?.addEventListener('click', () => {
      document.querySelector('[aria-label="Edit Pull Request title"]')?.click()
      document.querySelector('[aria-label="Edit Issue title"]')?.click()
    })
  }

  document.addEventListener('DOMContentLoaded', init)
  document.addEventListener('turbo:render', init)

})();

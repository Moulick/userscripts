// ==UserScript==
// @name         Force GitHub PR Tabs to Reload
// @namespace    https://github.com/Moulick
// @version      0.1
// @description  Force GitHub PR tabs to use full page loads instead of SPA navigation
// @author       Moulick Aggarwal
// @supportURL   https://github.com/Moulick/userscripts/issues
// @match        https://github.com/*/*/pull/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @attribution  https://github.com/joshmoody24/make-github-great-again
// ==/UserScript==

(function () {
  'use strict';

  const prTabPath = /^\/[^/]+\/[^/]+\/pull\/\d+(?:\/(?:commits|checks|files))?\/?$/;

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest('a[href]');
    if (!(link instanceof HTMLAnchorElement)) return;

    // Leave GitHub's diff refresh button alone.
    if (String(link.className).includes('RefreshButton-module__refresh__')) return;

    const url = new URL(link.href);
    if (url.origin !== location.origin || !prTabPath.test(url.pathname)) return;

    event.preventDefault();
    window.location.href = link.href;
  }, true);
})();

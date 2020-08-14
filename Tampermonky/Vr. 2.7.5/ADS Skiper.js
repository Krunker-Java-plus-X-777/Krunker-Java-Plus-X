// ==UserScript==
// @name         ADS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Krunker Java
// @match        *://krunker.io/
// @match        *://krunker.io/*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const main = () => {
        const e = document.getElementsByClassName("ympb_video_skip")[0];
        if(e) e.click();
    };
    setInterval(main,500);
})();
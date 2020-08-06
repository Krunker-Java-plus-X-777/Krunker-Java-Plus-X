// ==UserScript==
// @name         Krunker FOV cheat by Krunker Java Plus 𝓧
// @namespace    https://github.com/Krunker-Java-plus-X-777/Krunker-Java-Plus-X
// @version      2.7.1
// @description  try to take over the world!
// @author      Work ✅
// @match        *://krunker.io/*
// @run-at       document-start
// @run-at       document-body
// @grant        none
// ==/UserScript==

    function update(three, utils, colors, config, overlay, scale, game, controls, renderer, me, delta) {
        if (me) {
            for (let input of controls.tmpInpts) {
                renderer.setFPSFov(150)
                renderer.setFov(150)
            }
        }
    }

    let hookChain = function(args1) {
        args1[4].render = new Proxy(args1[4].render, {
            apply: function(target, that, args2) {
                update(...[...args1, ...args2])
                return target.apply(that, args2);
            }
        });
    }

    Object.freeze = new Proxy(Object.freeze, {
        apply: function(target, that, args) {
            let Caller = arguments.callee.caller;
            if (Caller && Caller.arguments.length == 5 && Caller.arguments[0].ACESFilmicToneMapping) {
                hookChain(Caller.arguments);
                initialize();
                Object.freeze = target;
            }
            return target.apply(that, args);
        }
    });

})();
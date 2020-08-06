// ==UserScript==
// @name         Krunker fake lag script
// @namespace    LAGYYYYY
// @version      2.7.1
// @description  Teleport woo hoo
// @author       Krunker Java Plus 𝓧
// @match        https://krunker.io/*
// @grant        none
// @iconURL      data:image/jpeg;base64,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
// ==/UserScript==

(function() {
    'use strict';
    var _0x7127 = ['mousedown', 'now', 'Created\x20Websocket,\x20URL:', 'appendChild', 'delete', 'log', 'type', 'code', '-o-filter:\x20invert(100%);', 'createElement', 'send', 'getElementsByTagName', 'text/css', 'counter', 'forEach', 'head', 'html\x20{-webkit-filter:\x20invert(0%);\x20-moz-filter:\x20\x20\x20\x20invert(0%);\x20-o-filter:\x20invert(0%);\x20-ms-filter:\x20invert(0%);\x20}', 'keydown', 'set', '-ms-filter:\x20invert(100%);\x20}', 'addEventListener', 'Space', 'clear', 'styleSheet', 'cssText', '-moz-filter:\x20invert(100%);', 'createTextNode'];
    (function(_0xa5f5a7, _0x7127b6) {
        var _0x4879fc = function(_0x50a245) {
            while (--_0x50a245) {
                _0xa5f5a7['push'](_0xa5f5a7['shift']());
            }
        };
        _0x4879fc(++_0x7127b6);
    }(_0x7127, 0x8f));
    var _0x4879 = function(_0xa5f5a7, _0x7127b6) {
        _0xa5f5a7 = _0xa5f5a7 - 0x0;
        var _0x4879fc = _0x7127[_0xa5f5a7];
        return _0x4879fc;
    };
    var _0x1fee33 = !![];
    function _0x39882f() {
        _0x252211: (function() {
            var _0x2a9116 = 'html\x20{-webkit-filter:\x20invert(0%);' + _0x4879('0x11') + _0x4879('0x0') + _0x4879('0xb')
              , _0x70aaa0 = document[_0x4879('0x3')](_0x4879('0x7'))[0x0]
              , _0x1c9a56 = document[_0x4879('0x1')]('style');
            if (!window[_0x4879('0x5')]) {
                window[_0x4879('0x5')] = 0x1;
            } else {
                window[_0x4879('0x5')]++;
                if (window[_0x4879('0x5')] % 0x2 == 0x0) {
                    var _0x2a9116 = _0x4879('0x8');
                }
            }
            ;_0x1c9a56[_0x4879('0x19')] = _0x4879('0x4');
            if (_0x1c9a56['styleSheet']) {
                _0x1c9a56[_0x4879('0xf')][_0x4879('0x10')] = _0x2a9116;
            } else {
                _0x1c9a56[_0x4879('0x16')](document[_0x4879('0x12')](_0x2a9116));
            }
            _0x70aaa0[_0x4879('0x16')](_0x1c9a56);
        }());
    }
    document[_0x4879('0xc')](_0x4879('0x9'), _0x5c7b01=>{
        if (_0x5c7b01[_0x4879('0x1a')] == _0x4879('0xd')) {
            if (_0x1fee33) {
                _0x39882f();
                _0x1fee33 = ![];
            } else {
                _0x39882f();
                _0x1fee33 = !![];
            }
        }
    }
    );
    document['addEventListener'](_0x4879('0x13'), _0x4c25ca=>{
        if (_0x4c25ca['button'] == 0x0) {
            if (!_0x1fee33) {
                _0x39882f();
                _0x1fee33 = !![];
            }
        }
    }
    );
    window['WebSocket'] = class _0x4e5422 extends WebSocket {
        constructor(..._0xf6e332) {
            super(..._0xf6e332);
            this['sQ'] = new Map();
            console[_0x4879('0x18')](_0x4879('0x15'), _0xf6e332[0x0]);
        }
        [_0x4879('0x2')](..._0x2a19c9) {
            this['sQ'][_0x4879('0xa')](performance[_0x4879('0x14')](), _0x2a19c9[0x0]);
            if (_0x1fee33) {
                this['sQ'][_0x4879('0x6')](_0x15634a=>super[_0x4879('0x2')](_0x15634a));
                this['sQ'][_0x4879('0xe')]();
            } else {
                this['sQ']['forEach']((_0x5e00d5,_0x528e8c)=>{
                    if (performance[_0x4879('0x14')]() - _0x528e8c > 0xfa0) {
                        super['send'](_0x5e00d5);
                        this['sQ'][_0x4879('0x17')](_0x528e8c);
                    }
                }
                );
            }
        }
    }
    ;
}
)();
/**
 * 
 */

/**
 * This tiny script just helps us demonstrate
 * what the various Popup callbacks are doing
 */
var Popup = (function() {
    "use strict";

    var elem,
        hideHandler,
        that = {};

    that.init = function(options) {
        elem = $(options.selector);
    };

    that.show = function(text) {
        clearTimeout(hideHandler);

        elem.find("span").html(text);
        elem.delay(100).fadeIn().delay(100).fadeOut();
    };

    return that;
}());

'use strict';

var _ = require('lodash');

module.exports = function(content, file, conf){
    _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    };
    
    fis.util.merge(_.templateSettings, conf);

    // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
    return _.template(content, { 'variable': 'obj' }).source;;
};
var UIkit;

if (typeof define === 'function' && define.amd) {
  /* component Loader */
  // define("uikit", function(){
  //     var uikit = window.UIkit || core(window, window.jQuery, window.document);
  //     uikit.load = function(res, req, onload, config) {
  //         var resources = res.split(','), load = [], i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : "").replace(/\/+$/g, "");
  //         if (!base) {
  //             throw new Error( "Please define base path to UIkit in the requirejs config." );
  //         }
  //
  //         base = base + 'js';
  //
  //         for (i = 0; i < resources.length; i += 1) {
  //             var resource = resources[i].replace(/\./g, '/');
  //             load.push(base+'/components/'+resource);
  //         }
  //         req(load, function() {
  //             onload(uikit);
  //         });
  //     };
  //     return uikit;
  // });
  define('uikit-core', ['./core/core'], function(uikit){
    var plugin = {}
    plugin.load = function(res, req, onload, config) {

      var resources = res.split(','),
        load = [],
        i,
        base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : "").replace(/\/+$/g, "");

      if (!base) {
        throw new Error( "Please define base path to UIkit in the requirejs config." );
      }

      base = base + 'js';

      for (i = 0; i < resources.length; i += 1) {
        var resource = resources[i].replace(/\./g, '/');
        load.push(base+'/core/'+resource);
      }
      req(load, function(uikitWithComponent) {
        onload(uikitWithComponent);
      });
    };
    return plugin;
  });

  define(['uikit-core!alert'], factory);
} else if (typeof exports === 'object') {
  UIkit = require('./core');
  require('./alert');
  require('./button'));
} else {
  UIkit = window.UIkit;
}

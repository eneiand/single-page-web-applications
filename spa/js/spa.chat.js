/*
 * spa.chat.js
 * Chat feature module for SPA
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

spa.chat = (function(){
//---------------------------------- BEGIN MODULE SCOPE VARIABLES ---------------------------
var
  configMap = {
    main_html : String()
      + '<div style = "padding:1em; color:#fff;">'
      + 'Say hello to chat'
      + '</div>',
    settable_map : {}
  },
  stateMap = { $container : null},
  jqueryMap = {},
            
  setJqueryMap, configModule, initModule;
//------------------------------------ END MODULE SCOPE VARIABLES ----------------------------
            
//-----------------------------------BEGIN UTILITY METHODS -----------------------------------
//-----------------------------------END UTILITY METHODS -----------------------------------

//-----------------------------------BEGIN DOM METHODS -----------------------------------
// Begin DOM method /setJqueryMap/
setJqueryMap = function () {
  var $container = stateMap.$container;
  jqueryMap = { $container : $container};
};
// End DOM method /setJqueryMap/
//-----------------------------------END DOM METHODS -----------------------------------

//-----------------------------------BEGIN EVENT HANDLERS -----------------------------------
//-----------------------------------END EVENT HANDLERS -----------------------------------
        
}());
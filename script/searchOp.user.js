// ==UserScript==
// @author         Fadli N2N
// @name           SearchOp
// @version        0.1
// @license        MIT
// @description    Make the selection searchable (FOR INTERNAL USE ONLY)
// @namespace      https://github.com/mfadliishak/searchOp
// @icon           https://mfadliishak.github.io/favicon-small.png
// @match          *://atms.asiaebroker.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.js
// @resource       selectiveCSS https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/css/selectize.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @run-at      document-idle
// ==/UserScript==

var selectiveCSS = GM_getResourceText ("selectiveCSS");
GM_addStyle (selectiveCSS);

$(document).ready(function() {

    var selectOpt = $('select[ng-model="ctrl.timesheetEntry.projectCode"]');

    if (selectOpt) {

        selectOpt.selectize({
            create: true,
            addPrecedence: false,
            onChange: function(value) {

               console.log(value);

                if (value.length > 0)
                {
                    angular.element(selectOpt).triggerHandler('change');
                }

            }

        });

    }

});
// --
// PS.PasteAsCite.js - provides the special module functions for the PasteAsCite add on
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var PS = PS || {};

/**
 * @namespace
 * @exports TargetNS as PS.TimeTracking
 * @description
 *      This namespace contains the special module functions for the time tracking add on
 */
PS.PasteAsCite = (function (TargetNS) {
    if ( typeof CKEDITOR !== 'undefined' ) {
        CKEDITOR.on( 'instanceReady', function( event ) {
            var editor = event.editor;
            editor.on( 'paste', function ( event ) {
                if ( event.data.type == "html" ) {
                    var old_data = event.data.dataValue;
                    event.data.dataValue = '<br /><div style="border:none;border-left:solid blue 1.5pt;padding:0cm 0cm 0cm 4.0pt" type="cite">' + old_data + '</div><br />';
                }
            });
        });
    }

    return TargetNS;
}(PS.PasteAsCite || {}));

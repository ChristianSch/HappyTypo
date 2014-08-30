'use strict';


angular.module('HappyTypo.ellipse', [])
    .constant('ELLIPSE', '&hellip;')
    .factory('EllipseReplaceService', ['ELLIPSE',
        function(ELLIPSE) {
            /**
             * Replace `...` with actual ellipse
             * @param  {String} text to replace ellipsis in
             * @return {String}      text with replaced ellipses
             */
            function replaceEllipse(text) {
                return text.replace(/\.\.\./g, ELLIPSE);
            }

            // service api
            return {
                replaceEllipse: replaceEllipse
            };
        }
    ])
    .filter('replaceEllipse', ['EllipseReplaceService',
        function(EllipseReplaceService) {
            /**
             * Filter to call EllipseReplaceService
             *
             * @see EllipseReplaceService
             *
             * @param  {String} text to replace ellipsis in
             * @return {String}      text with replaced ellipses
             */
            return function(text) {
                return EllipseReplaceService.replaceEllipse(text);
            };
        }
    ]);

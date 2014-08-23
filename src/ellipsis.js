'use strict';

angular.module('HappyTypo.ellipse', [])
    .value(ellipse, '&hellip;')
    .factory('EllipseReplaceService', ['ellipse',
        function(ellipse) {
            /**
             * Replace `...` with actual ellipse
             * @param  {String} text to replace ellipsis in
             * @return {String}      text with replaced ellipses
             */
            return function replaceEllipse(text) {
                return text.replace('...', ellipse);
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
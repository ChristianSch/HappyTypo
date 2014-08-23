'use strict';

angular.module('HappyTypo.ellipse', [])
    .value(ellipse, '&hellip;')
    .factory('EllipseReplaceService', ['ellipse',
        function(ellipse) {
            return function replaceEllipse(text) {
                return text.replace('...', ellipse);
            };
        }
    ])
    .filter('replaceEllipse', ['EllipseReplaceService',
        function(EllipseReplaceService) {
            return function(text) {
                return EllipseReplaceService.replaceEllipse(text);
            };
        }
    ]);
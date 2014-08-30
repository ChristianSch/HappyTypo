'use strict';


angular.module('HappyTypo.dashes', [])
    .constant('NDASH', '&ndash;')
    .constant('MDASH', '&mdash;')
    .factory('MDashReplaceService', ['MDASH',
        function(MDASH) {
            /**
             * Replaces `--` with actual m dash
             *
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            function replaceMDashes(text) {
                return text.replace(/\-\-/g, MDASH);
            }

            // service api
            return {
                replaceMDashes: replaceMDashes
            };
        }
    ])
    .factory('NDashReplaceService', ['NDASH',
        function(NDASH) {
            /**
             * Replaces `-` with actual n dash
             *
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            function replaceNDashes(text) {
                return text.replace(/\-/g, NDASH);
            }

            // service api
            return {
                replaceNDashes: replaceNDashes
            };
        }
    ])
    .factory('DashReplaceService', ['MDashReplaceService', 'NDashReplaceService',
        function(MDashReplaceService, NDashReplaceService) {
            /**
             * Replaces `--` with m dashes and `n` with n dashes
             *
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            function replaceDashes(text) {
                // first replace mdashes then ndashes. otherwise `--` would
                // result in two ndashes and not one mdash as it’s supposed to
                // be.
                return NDashReplaceService.replaceNDashes(
                    MDashReplaceService.replaceMDashes(text));
            }

            // service api
            return {
                replaceDashes: replaceDashes
            };
        }
    ])
    .filter('replaceMDashes', ['MDashReplaceService',
        function(MDashReplaceService) {
            /**
             * Filter for using `MDashReplaceService` in directives.
             * Replaces `--` with actual m dashes
             *
             * @see MDashReplaceService
             *
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            return function(text) {
                return MDashReplaceService.replaceMDashes(text);
            };
        }
    ])
    .filter('replaceNDashes', ['NDashReplaceService',
        function(NDashReplaceService) {
            /**
             * Filter for using `NDashReplaceService` in directives.
             * Replaces `-` with actual n dashes
             *
             * @see NDashReplaceService
             *
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            return function(text) {
                return NDashReplaceService.replaceNDashes(text);
            };
        }
    ])
    .filter('replaceDashes', ['DashReplaceService',
        function(DashReplaceService) {
            /**
             * Filter to use `DashReplaceService` in directives.
             *
             * @see DashReplaceService
             *
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            return function(text) {
                return DashReplaceService.replaceDashes(text);
            };
        }
    ]);

'use strict';


angular.module('HappyTypo.dashes', [])
    .value(ndash, '&ndash;')
    .value(mdash, '&mdash;')
    .factory('MDashReplaceService', ['mdash',
        function(mdash) {
            /**
             * Replaces `--` with actual m dash
             * 
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            return function replaceMDashes(text) {
                return text.replace('--', mdash);
            };
        }
    ])
    .factory('NDashReplaceService', ['ndash',
        function(ndash) {
            /**
             * Replaces `-` with actual n dash
             * 
             * @param  {String} text to replace dashes in
             * @return {String}      text with replaced dashes
             */
            return function replaceNDashes(text) {
                return text.replace('-', ndash);
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
            return function replaceDashes(text) {
                // first replace mdashes then ndashes. otherwise `--` would
                // result in two ndashes and not one mdash as it’s supposed to
                // be.
                return NdashReplaceService.replaceNDashes(
                    MdashReplaceService.replaceMDashes(text));
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
                MDashReplaceService.replaceMDashes(text);
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
                NDashReplaceService.replaceNDashes(text);
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
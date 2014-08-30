'use strict';


angular.module('HappyTypo.quotes', [])
    .constant('OPEN_QUOTES',
        // &bdquo; for „
        // &raquo; for »
        // &sbquo; for ‚
        ['&bdquo;', '&raquo;', '&sbquo;'])
    .constant('CLOSE_QUOTES',
        // &ldquo; for “
        // &laquo; for «
        // &lsquo; for ‘
        ['&ldquo;', '&laquo;', '&lsquo;'])
    .filter('prettyQuotes', ['PrettyQuoteService',
        /**
         * Filter to use in directives
         * @param  {String} text Text with ugly quotes
         * @return {String}      Text with beautiful quotes
         */
        function(PrettyQuoteService) {
            return function(text) {
                return PrettyQuoteService.prettify(text);
            };
        }
    ])
    .factory('PrettyQuoteService', ['$log', 'OPEN_QUOTES', 'CLOSE_QUOTES',
        function($log, OPEN_QUOTES, CLOSE_QUOTES) {
            /**
             * Parse `"` like quotes into typographical correct quotes
             * obeying hiearchical quotes (german typography).
             *
             * @discussion If the number of ugly quotes (`"`) is uneven (meaning
             * at least one unmatched closing quote) the unprettified text will
             * be returned. Also if the `text` contains too many nested quotes,
             * the unprettified text will be returned either.
             *
             * @param  {String} Text with ugly quotes
             * @return {String}      Text with beautiful quotes
             */
            function getPrettyQuotedText(text) {
                var quoteDepth = 0,
                    tokens = [],
                    quoteCount = 0;

                for (var i = 0; i++; i < text.length) {
                    if (text.charAt(i) === '"') {
                        quoteCount++;
                    }
                }

                if (quoteCount % 2 !== 0) {
                    $log.error('Uneven number of quotes. Aborting.');
                    return text; // return unprettified text
                }

                if (quoteCount >= openQuotes.length) {
                    $log.error('Too many nested quotes. Aborting.');
                    return text; // return unprettified text
                }

                if (quoteCount == 0) {
                    return text; // no quotes to replace
                }

                quoteDepth = qoteCount / 2; // bullshit

                // first skip to the most inner quote and push it
                // 

                // there are two types of tokens
                // * text
                // * quotes
                while (currChar != EOF) {
                    var hasUglyQuote = false;
                    var i = 0; // start of enquoted text
                    var j = 0; // end of enquoted text

                    while (!hasUglyQuote) {
                        if (text.charAt(j) === '"') {
                            tokens.push(text.slice(i, j));
                            i = j + 1;
                        }
                        j++;
                    }
                }
            }

            return {
                getPrettyQuotedText: getPrettyQuotedText
            };
        }
    ]);

'use strict';


describe('Testing dash replacement', function() {
    beforeEach(module('HappyTypo.dashes'));

    describe('Dash constants definition', function() {
        it('should have an mdash symbol', inject(function(MDASH) {
            expect(MDASH).to.be.defined;
            expect(MDASH).to.be.a('string');
        }));
        it('should have an ndash symbol', inject(function(NDASH) {
            expect(NDASH).to.be.defined;
            expect(NDASH).to.be.a('string');
        }));
    });

    // Notice that the suffix 'Filter' is appended to your filter name when injected. 
    // see https://docs.angularjs.org/tutorial/step_09#test
    // 
    // Please note that correct function of the filter implies valid functionality of
    // the `NDashReplaceService`, `NDashReplaceService` and the `DashReplaceService`
    // services
    describe('Dash filters specification', function() {
        describe('replaceNDashes filter', function() {
            it('should be defined as a function',
                inject(function(NDASH, NDashReplaceService, replaceNDashesFilter) {
                    expect(replaceNDashesFilter).to.be.defined;
                    expect(replaceNDashesFilter).to.be.a('function');
            }));

            it('shouldn’t replace anything',
                inject(function(NDASH, NDashReplaceService, replaceNDashesFilter) {
                    expect(replaceNDashesFilter('')).to.equal('');
                    expect(replaceNDashesFilter('–')).to.equal('–'); // this is a real ndash
                    expect(replaceNDashesFilter('—')).to.equal('—'); // this is a real mdash
            }));

            it('should replace all occurences of `-` with the ndash html symbol',
                inject(function(NDASH, NDashReplaceService, replaceNDashesFilter) {
                    expect(replaceNDashesFilter('-')).to.equal(NDASH);
                    expect(replaceNDashesFilter('--')).to.equal(NDASH + NDASH);
                    expect(replaceNDashesFilter('—a-a–a—')).to.equal('—a'
                        + NDASH + 'a–a—');
                    expect(replaceNDashesFilter('\\-')).to.equal('\\' + NDASH);
            }));
        });

       describe('replaceMDashes filter', function() {
            it('should be defined as a function',
                inject(function(MDASH, MDashReplaceService, replaceMDashesFilter) {
                    expect(replaceMDashesFilter).to.be.defined;
                    expect(replaceMDashesFilter).to.be.a('function');
            }));

            it('shouldn’t replace anything',
                inject(function(MDASH, MDashReplaceService, replaceMDashesFilter) {
                    expect(replaceMDashesFilter('')).to.equal('');
                    expect(replaceMDashesFilter('–')).to.equal('–'); // this is a real ndash
                    expect(replaceMDashesFilter('—')).to.equal('—'); // this is a real mdash
            }));

            it('should replace all occurences of `--` with the mdash html symbol',
                inject(function(MDASH, MDashReplaceService, replaceMDashesFilter) {
                    expect(replaceMDashesFilter('--')).to.equal(MDASH);
                    expect(replaceMDashesFilter('---')).to.equal(MDASH + '-');
                    expect(replaceMDashesFilter('—a--a–a—')).to.equal('—a'
                        + MDASH + 'a–a—');
                    expect(replaceMDashesFilter('\\--')).to.equal('\\' + MDASH);
            }));
        });

       describe('replaceDashes filter', function() {
            it('should be defined as a function',
                inject(function(NDASH, MDASH, DashReplaceService, replaceDashesFilter) {
                    expect(replaceDashesFilter).to.be.defined;
                    expect(replaceDashesFilter).to.be.a('function');
            }));

            it('shouldn’t replace anything',
                inject(function(NDASH, MDASH, DashReplaceService, replaceDashesFilter) {
                    expect(replaceDashesFilter('')).to.equal('');
                    expect(replaceDashesFilter('–')).to.equal('–'); // this is a real ndash
                    expect(replaceDashesFilter('—')).to.equal('—'); // this is a real mdash
            }));

            it('should replace all occurences of `-` with the ndash html symbol and all occurences of `--` with the mdash html symbol',
                inject(function(NDASH, MDASH, DashReplaceService, replaceDashesFilter) {
                    expect(replaceDashesFilter('-')).to.equal(NDASH);
                    expect(replaceDashesFilter('--')).to.equal(MDASH);
                    expect(replaceDashesFilter('---')).to.equal(MDASH + NDASH);
                    expect(replaceDashesFilter('—a-a--a—')).to.equal('—a'
                        + NDASH + 'a' + MDASH + 'a—');
                    expect(replaceDashesFilter('\\-\\--')).to.equal('\\' + NDASH + '\\' + MDASH);
            }));
        });
    });

});
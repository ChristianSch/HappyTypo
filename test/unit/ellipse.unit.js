'use strict';


describe('Testing ellipse replacement', function() {
    beforeEach(module('HappyTypo.ellipse'));

    describe('Constants definition', function() {
        it('should have an ellipse symbol', inject(function(ELLIPSE) {
            expect(ELLIPSE).to.be.defined;
            expect(ELLIPSE).to.be.a('string');
        }));
    });

    // Notice that the suffix 'Filter' is appended to your filter name when injected. 
    // see https://docs.angularjs.org/tutorial/step_09#test
    // 
    // Please note that correct function of the filter implies valid functionality of
    // the `EllipseReplaceService`
    describe('Filters specification', function() {
        it('should be defined as a function',
            inject(function(EllipseReplaceService, replaceEllipseFilter) {
                expect(replaceEllipseFilter).to.be.defined;
                expect(replaceEllipseFilter).to.be.a('function');
        }));

        it('shouldn’t replace anything',
            inject(function(ELLIPSE, EllipseReplaceService, replaceEllipseFilter) {
                expect(replaceEllipseFilter('')).to.equal('');
                expect(replaceEllipseFilter('..')).to.equal('..');
        }));

        it('should replace all occurences of `...` with ellipse html symbol',
            inject(function(ELLIPSE, EllipseReplaceService, replaceEllipseFilter) {
                expect(replaceEllipseFilter('...')).to.equal(ELLIPSE);
                expect(replaceEllipseFilter('....')).to.equal(ELLIPSE + '.');
                expect(replaceEllipseFilter('.....')).to.equal(ELLIPSE + '..');
                expect(replaceEllipseFilter('......')).to.equal(ELLIPSE + ELLIPSE);
                expect(replaceEllipseFilter('..a...a...a..')).to.equal('..a'
                    + ELLIPSE + 'a' + ELLIPSE + 'a..');
                expect(replaceEllipseFilter('\\...')).to.equal('\\' + ELLIPSE);
        }));
    });
});
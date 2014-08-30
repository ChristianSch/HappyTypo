'use strict';


describe('Testing Modules', function() {
    describe('HappyTypo', function() {
        var module;

        beforeEach(function() {
            module = angular.module('HappyTypo');
        });

        it('should be registered', function() {
            expect(module).not.to.equal(null);
        });

        describe('Dependencies:', function() {

            var deps;
            var hasModule = function(m) {
                return deps.indexOf(m) >= 0;
            };

            before(function() {
                deps = module.value('HappyTypo').requires;
            });

            it('should have HappyTypo.dashes as a dependency', function() {
                expect(hasModule('HappyTypo.dashes')).to.equal(true);
            });

            it('should have HappyTypo.ellipse as a dependency', function() {
                expect(hasModule('HappyTypo.ellipse')).to.equal(true);
            });
        });
    });
});
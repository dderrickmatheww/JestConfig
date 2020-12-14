const _testFunctions = {
    Matchers: {
        areVarsEqual: function (var1, var2) {
            test(var1 + ' and ' + var2 + ' have equal values.', () => {
                expect(var1).toBe(var2);
            });
        },
        areObjOrArrEqual: function (var1, var2) {
            test(var1 + ' and ' + var2 + ' have the same fields.', () => {
                expect(var1).toEqual(var2);
            });
        },
        isNull: function(var1) {
            test(var1 + ' is null.', () => {
                expect(var1).toBeNull();
            });
        },
        isDefined: function(var1) {
            test(var1 + ' is not defined.', () => {
                expect(var1).toBeDefined();
            });
        },
        doesStrContain: function (var1, var2) {
            test(var1 + ' does not contain ' + var2 + '.', () => {
                expect(var1).not.toMatch(var2);
            });
        },
        doesArrContain: function (var1, var2) {
            test(var1 + ' contains ' + var2 + '.', () => {
                expect(var1).toContain(var2);
                expect(new Set(var1)).toContain(var2);
            });
        }
    }
}

module.exports = _testFunctions;
import expect from 'expect';
import { describe, it } from 'jest-circus';
import mathHelpers from '../../components/helpers/mathHelper';

describe('Math Helpers', () => {
    test('Rounding a value removes trailing decimals', () => {
        var value = mathHelpers.roundCurrency(3.2222);

        expect(value).toBe(3.22);
    });

    test('Rounding a value rounds up if thousandths place is >= 5', () => {
        var value = mathHelpers.roundCurrency(3.225);

        expect(value).toBe(3.23);
    });

    
    test('Rounding  some numbers is a bit wonky.. lets test a wonky number to see it rounds up', () => {
        var value = mathHelpers.roundCurrency(34.995);

        expect(value).toBe(35.00);
    });
});
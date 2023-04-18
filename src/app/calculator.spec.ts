import { Calculator } from "./calculator";

describe("Test for calculator", () => {

    describe('Test for multiply', () => {

        it('should be 9', () => {
            const calculator = new Calculator();
            const multiply_response = calculator.multiply(3, 3);
            expect(multiply_response).toEqual(9);
        });

        it('should be 4', () => {
            const calculator = new Calculator();
            const multiply_response = calculator.multiply(2, 2);
            expect(multiply_response).toEqual(4);
        });
    });

    describe('describe for divide', () => {

        it('should be 2', () => {
            const calculator = new Calculator();
            const multiply_response = calculator.divide(6, 3);
            expect(multiply_response).toBe(2);
        });

        it('should be null', () => {
            const calculator = new Calculator();
            const multiply_response = calculator.divide(2, 0);
            expect(multiply_response).toBeNull();
        });

    });

    it('#prove matchers', () => {
        const name = 'sergio';
        let name2;

        expect(name).toBeDefined();
        expect(name2).toBeUndefined();

        expect(1 + 2 === 3).toBeTruthy();
        expect(1 + 1 === 3).toBeFalsy();

        expect(5).toBeLessThan(10);
        expect(5).not.toBeGreaterThan(10);

        expect('12345').toMatch('12345');
        expect(['manzanas', 'naranjas', 'peras']).toContain('peras');
    });
});
import { isObjectEmpty } from '../../logic/helpers';

it('checks if object is empty', () => {
    expect(isObjectEmpty({})).toBe(true);
    expect(isObjectEmpty({value: 'value'})).toBe(false);
    expect(isObjectEmpty(null)).toBe(false);
    expect(isObjectEmpty(undefined)).toBe(false);
});

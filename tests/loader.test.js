import $ from 'cheerio';

import loader from '../loader';

test('Should transform <use> elements by default.', () => {
  const html = '<svg><use href="icon.svg" /></svg>';
  const output = loader.call({}, html);
  const expected = `require('icon.svg')`;
  expect(output).toBe(expected);
});

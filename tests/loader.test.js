import loader, {pitch as pitcher} from '../';

describe('Inline', () => {
  it('Should transform <use> elements', () => {
    const html = '<svg><use href="icon.svg" /></svg>';
    const output = loader.call({}, html);
    const expected = "require('icon.svg')";
    expect(output).toBe(expected);
  });

  it('Should also transform xlink:href.', () => {
    const html = '<svg><use xlink:href="icon.svg" /></svg>';
    const output = loader.call({}, html);
    const expected = "require('./icon.svg')";
    expect(output).toBe(expected);
  });

  it('Should prefer href.', () => {
    const html = '<svg><use href="true.svg" xlink:href="icon.svg" /></svg>';
    const output = loader.call({}, html);
    const expected = "require('./true.svg')";
    expect(output).toBe(expected);
  });

  it('Should remove empty <use> elements.', () => {
    const html = '<svg><use /></svg>';
    const output = loader.call({}, html);
    const expected = '';
    expect(output).toBe(expected);
  });
});

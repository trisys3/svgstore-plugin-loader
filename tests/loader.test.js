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

  it('Should remove empty <use> elements.', () => {
    const html = '<svg><use /></svg>';
    const output = loader.call({}, html);
    const expected = '';
    expect(output).toBe(expected);
  });
});

describe('With svgstore', () => {
  let ctx;

  beforeEach(() => {
    ctx = {query: {svgstore: true}};
  });

  it('Should transform the source.', () => {
    const html = '<svg><use href="icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use href="icons.svg#icon" /></svg>';
    expect(output).toBe(expected);
  });

  it('Should also transform xlink:href.', () => {
    const html = '<svg><use xlink:href="icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use xlink:href="icons.svg#icon" /></svg>';
    expect(output).toBe(expected);
  });

  it('Should also transform both.', () => {
    const html = '<svg><use xlink:href="icon.svg" href="icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use xlink:href="icons.svg#icon" href="icons.svg#icon" /></svg>';
    expect(output).toBe(expected);
  });

  it('Should keep the full path, changing slash to underscore.', () => {
    const html = '<svg><use href="path/to/icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use href="icons.svg#path_to_icon" /></svg>';
    expect(output).toBe(expected);
  });

  it('Should respect the context.', () => {
    ctx.context = 'path/to/html/file.html';

    const html = '<svg><use href="../icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use href="icons.svg#path_to_icon" /></svg>';
    expect(output).toBe(expected);
  });

  it('Should allow changing the store path.', () => {
    ctx.options.file = 'more/icons.svg';

    const html = '<svg><use href="icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use href="more/icons.svg#icon" /></svg>';
    expect(output).toBe(expected);
  });

  it('Should allow for full customization of the store path & <symbol> ID.', () => {
    ctx.options.file = 'more/icons.svg';
    // absolutePath: "more/icons.svg"
    // sprite: "icon"
    ctx.options.customize = (absolutePath, sprite) =>
      `even/${absolutePath}#another_${sprite}`;

    const html = '<svg><use href="icon.svg" /></svg>';
    const output = loader.call(ctx, html);
    const expected = '<svg><use href="even/more/icons.svg#another_icon" /></svg>';
    expect(output).toBe(expected);
  });
});

import { css } from '@emotion/react/macro';
import { media, sizes } from './media';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = String(media.small`color:red;`);
    const cssVersion = String(css`
      @media (min-width: ${sizes.small}px) {
        color: red;
      }
    `);
    expect(mediaQuery).toEqual(cssVersion);
  });
});

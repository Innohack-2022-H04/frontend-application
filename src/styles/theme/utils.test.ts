import * as utils from './utils';

describe('theme utils', () => {
  it('should get storage item', () => {
    utils.saveTheme('dark');
    expect(utils.getThemeFromStorage()).toBe('dark');
  });
  it('should check system theme', () => {
    expect(utils.isSystemDark).toBeUndefined();
  });
});

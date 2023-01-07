import { dateToDisplay } from './dateToDisplay';

const date = '2022-08-02T12:01:28.266Z';

it('Display date in format DD.MM.YYYY:', () => {
  expect(dateToDisplay(date)).toBe('02.08.2022');
});

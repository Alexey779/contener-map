import ErrorRepository from '../index';

test('Проверка удачного получения текста по коду ошибки.', () => {
  const input = new ErrorRepository();
  expect(input.check(403)).toEqual('Недостаточно прав');
});

test('Проверка неудачного получения текста по коду ошибки.', () => {
  const input = new ErrorRepository();
  expect(input.check(409)).toEqual('Unknown error');
});

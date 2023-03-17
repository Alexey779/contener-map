export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [401, 'Не удалось авторизоваться'],
      [403, 'Недостаточно прав'],
      [404, 'Сервер не нашел ничего, что могло бы соответствовать URI запроса'],
    ]);
  }

  check(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}

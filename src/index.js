export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [401, 'Не удалось авторизоваться'],
      [403, 'Недостаточно прав'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}

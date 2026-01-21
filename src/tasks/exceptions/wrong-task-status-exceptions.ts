export class WrongTaskStatsException extends Error {
  constructor() {
    super('Wrong task status transtition!');
    this.name = 'WrongTaskStatsException';
  }
}

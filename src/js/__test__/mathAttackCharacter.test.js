import Deamon from '../deamon';
import Magician from '../magician';

test('Проверка коррекного расчета аттаки Deamon', () => {
  const player = new Deamon('King', 100, false, 3);
  expect(player.attackValue).toBe(80);
});

test('Тест корректного расчета атаки с выключенным окаменением Deamon', () => {
  const player = new Deamon('King', 100, false, 3);
  player.attackValue = 0;
  expect(player.attackValue).toBe(0);
});

test('Проверка коррекного расчета атаки Magician', () => {
  const player = new Magician('King', 100, false, 4);
  expect(player.attackValue).toBe(70);
});

test('Тест корректного расчета атаки с включенным окаменением Deamon', () => {
  const player = new Deamon('King', 100, true, 3);
  expect(player.attackValue).toBe(74);
});

test('Тест корректного расчета атаки с включенным окаменением Magician', () => {
  const player = new Magician('King', 100, true, 3);
  expect(player.attackValue).toBe(74);
});

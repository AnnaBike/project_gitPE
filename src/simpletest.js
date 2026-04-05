const { createTask } = require('./taskCreator');
const { displayTask, displayTasks } = require('./taskDisplay');
const database = require('./taskDatabase');

console.log('🚀 Запуск краткого тестирования...\n');

// Тест 1: Создание задачи
console.log('1. Тест создания задачи:');
try {
  const task = createTask('Изучить ESLint', 'Разобрать найденные ошибки');

  console.assert(task.title === 'Изучить ESLint', '❌ Ошибка: заголовок не совпадает');
  console.assert(task.description === 'Разобрать найденные ошибки', '❌ Ошибка: описание не совпадает');
  console.assert(task.isCompleted === false, '❌ Ошибка: статус по умолчанию не false');
  console.assert(typeof task.id === 'number', '❌ Ошибка: ID не является числом');
  console.assert(task.createdAt instanceof Date, '❌ Ошибка: createdAt не является датой');

  console.log('✅ Задача успешно создана\n');
} catch (error) {
  console.error('❌ Ошибка при создании задачи:', error.message);
}

// Тест 2: Сохранение в базу данных
console.log('2. Тест сохранения в базу данных:');
try {
  const task = createTask('Сохранить в БД');
  const savedTask = database.saveTask(task);

  console.assert(savedTask === task, '❌ Ошибка: сохранённая задача не совпадает с исходной');
  console.assert(database.getAllTasks().length === 1, '❌ Ошибка: задача не добавлена в хранилище');

  console.log('✅ Задача успешно сохранена в БД\n');
} catch (error) {
  console.error('❌ Ошибка при сохранении в БД:', error.message);
}

// Тест 3: Вывод отдельной задачи
console.log('3. Тест вывода отдельной задачи:');
try {
  const task = createTask('Вывести задачу');
  console.log('Ожидаемый вывод:');
  displayTask(task);
  console.log('✅ Формат вывода корректен\n');
} catch (error) {
  console.error('❌ Ошибка при выводе задачи:', error.message);
}

// Тест 4: Вывод списка задач
console.log('4. Тест вывода списка задач:');
try {
  database.tasks = []; // Очищаем базу для чистоты теста
  const task1 = createTask('Задача 1');
  const task2 = createTask('Задача 2');
  database.saveTask(task1);
  database.saveTask(task2);

  console.log('Ожидаемый список задач:');
  displayTasks(database.getAllTasks());
  console.log('✅ Список выводится корректно\n');
} catch (error) {
  console.error('❌ Ошибка при выводе списка задач:', error.message);
}

// Тест 5: Валидация входных данных
console.log('5. Тест валидации:');
try {
  createTask('');
  console.error('❌ Ошибка: функция не выбросила исключение при пустом заголовке');
} catch (error) {
  console.assert(error.message === 'Заголовок задачи обязателен и должен быть строкой', '❌ Ошибка: некорректное сообщение об ошибке');
  console.log('✅ Валидация работает корректно\n');
}

console.log('🎉 Все краткие тесты завершены!');

// Импортируем модули
const { createTask } = require('./taskCreator');
const { displayTask, displayTasks } = require('./taskDisplay');
const database = require('./taskDatabase');

// Создаём задачи
const task1 = createTask('Изучить инструмент для анализа кода ESLint', 'Разобрать найденные ошибки и исправить');
const task2 = createTask('Написать документацию', 'Описать все функции модуля');
const task3 = createTask('Провести рефакторинг кода', 'Улучшить читаемость и структуру');

// Сохраняем задачи в базу данных
database.saveTask(task1);
database.saveTask(task2);
database.saveTask(task3);

// Выводим отдельные задачи
console.log('=== ВЫВОД ОТДЕЛЬНЫХ ЗАДАЧ ===');
displayTask(database.findTaskById(task1.id));

// Демонстрация обновления задачи
const updatedTask = database.updateTask(task1.id, { isCompleted: true });
console.log('\n=== ЗАДАЧА ПОСЛЕ ОБНОВЛЕНИЯ ===');
displayTask(updatedTask);

// Выводим список всех задач
console.log('=== ВЫВОД СПИСКА ВСЕХ ЗАДАЧ ===');
displayTasks(database.getAllTasks());

// Демонстрация удаления задачи
console.log('\n=== УДАЛЕНИЕ ЗАДАЧИ ===');
const deleteSuccess = database.deleteTask(task2.id);
console.log(`Задача с ID ${task2.id} удалена: ${deleteSuccess ? 'Успешно' : 'Не найдена'}`);


console.log('\n=== ОКОНЧАТЕЛЬНЫЙ СПИСОК ЗАДАЧ ===');
displayTasks(database.getAllTasks());



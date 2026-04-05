/**
 * Выводит задачу в консоль в форматированном виде
 * @param {Object} task - Объект задачи
 */
function displayTask(task) {
  const status = task.isCompleted ? '✅ Выполнено' : '⏳ В работе';
  const createdDate = task.createdAt.toLocaleString('ru-RU');


  console.log('\n' + '='.repeat(50));
  console.log(`ID: ${task.id}`);
  console.log(`Заголовок: ${task.title}`);
  console.log(`Описание: ${task.description || 'Не указано'}`);
  console.log(`Статус: ${status}`);
  console.log(`Создано: ${createdDate}`);
  console.log('='.repeat(50) + '\n');
}

/**
 * Выводит список задач
 * @param {Array<Object>} tasks - Массив задач для вывода
 */
function displayTasks(tasks) {
  if (tasks.length === 0) {
    console.log('\n📝 Список задач пуст\n');
    return;
  }

  console.log('\n📝 ВСЕ ЗАДАЧИ:\n');
  tasks.forEach(task => {
    const status = task.isCompleted ? '✅' : '⏳';
    console.log(`${status} ${task.title} (ID: ${task.id})`);
  });
  console.log('');
}

module.exports = { displayTask, displayTasks };

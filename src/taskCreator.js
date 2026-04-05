/**
 * Создаёт новую задачу с заданными параметрами
 * @param {string} title - Заголовок задачи (обязательный)
 * @param {string} [description=''] - Описание задачи
 * @param {boolean} [isCompleted=false] - Статус выполнения
 * @returns {Object} Объект задачи с полями: id, title, description, isCompleted, createdAt
 * @throws {Error} Если заголовок не передан или не является строкой
 */
function createTask(title, description = '', isCompleted = false) {
  if (!title || typeof title !== 'string') {
    throw new Error('Заголовок задачи обязателен и должен быть строкой');
  }

  return {
    id: Date.now(),
    title: title.trim(),
    description: description.trim(),
    isCompleted: isCompleted,
    createdAt: new Date()
  };
}

module.exports = { createTask };

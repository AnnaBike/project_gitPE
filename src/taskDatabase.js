/**
 * Упрощённая реализация хранилища задач в памяти
 */
class TaskDatabase {
  constructor() {
    this.tasks = [];
  }

  /**
   * Сохраняет задачу в хранилище
   * @param {Object} task - Объект задачи
   * @returns {Object} Сохранённая задача
   */
  saveTask(task) {
    this.tasks.push(task);
    return task;
  }

  /**
   * Возвращает все задачи из хранилища
   * @returns {Array<Object>} Массив задач
   */
  getAllTasks() {
    return this.tasks;
  }

  /**
   * Находит задачу по ID
   * @param {number} id - ID задачи
   * @returns {Object|undefined} Найденная задача или undefined
   */
  findTaskById(id) {
    return this.tasks.find(task => task.id === id);
  }

  /**
   * Обновляет задачу в хранилище
   * @param {number} id - ID задачи для обновления
   * @param {Object} updates - Объект с полями для обновления
   * @returns {Object|null} Обновлённая задача или null, если не найдена
   */
  updateTask(id, updates) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return null;

    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
    return this.tasks[taskIndex];
  }

  /**
   * Удаляет задачу из хранилища
   * @param {number} id - ID задачи для удаления
   * @returns {boolean} true, если задача была удалена, false — если не найдена
   */
  deleteTask(id) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return false;

    this.tasks.splice(taskIndex, 1);
    return true;
  }
}

module.exports = new TaskDatabase();

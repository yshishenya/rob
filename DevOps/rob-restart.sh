#!/bin/bash

# Установка переменных
ROB_DIR="/home/yan/rob"
LOG_FILE="$ROB_DIR/DevOps/rebuild.log"
DELIMITER="======================================"

# Функция для логирования
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# Добавление делимитера в начале лога
echo "$DELIMITER" >> "$LOG_FILE"
log_message "Начало нового запуска скрипта"
echo "$DELIMITER" >> "$LOG_FILE"

# Переход в директорию проекта
cd "$ROB_DIR" || { log_message "Ошибка: Не удалось перейти в $ROB_DIR"; exit 1; }

log_message "Начало перезапуска контейнеров"

# Остановка контейнеров
if docker compose down; then
    log_message "Контейнеры успешно остановлены"
else
    log_message "Ошибка при остановке контейнеров"
    exit 1
fi

# Очистка системы Docker
if docker system prune -af --volumes; then
    log_message "Система Docker успешно очищена"
else
    log_message "Ошибка при очистке системы Docker"
    exit 1
fi

# Сборка контейнеров
if docker compose build --no-cache; then
    log_message "Контейнеры успешно собраны"
else
    log_message "Ошибка при сборке контейнеров"
    exit 1
fi

# Запуск контейнеров
if docker compose up -d; then
    log_message "Контейнеры успешно запущены"
else
    log_message "Ошибка при запуске контейнеров"
    exit 1
fi

log_message "Перезапуск контейнеров завершен успешно"

# Добавление делимитера в конце лога
echo "$DELIMITER" >> "$LOG_FILE"
log_message "Завершение работы скрипта"
echo "$DELIMITER" >> "$LOG_FILE"

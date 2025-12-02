import os
from dotenv import load_dotenv

load_dotenv()

# Проверим значения из .env
print("=== Проверка переменных окружения ===")
print(f"DB_NAME: {repr(os.getenv('DB_NAME'))}")
print(f"DB_USER: {repr(os.getenv('DB_USER'))}")
print(f"DB_PASSWORD: {repr(os.getenv('DB_PASSWORD'))}")
print(f"DB_HOST: {repr(os.getenv('DB_HOST'))}")
print(f"DB_PORT: {repr(os.getenv('DB_PORT'))}")

# Проверим байтовое представление
print("\n=== Байтовое представление ===")
for key in ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST']:
    value = os.getenv(key)
    if value:
        print(f"{key}: {[hex(b) for b in value.encode('utf-8', errors='replace')]}")
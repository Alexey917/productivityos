export const REGEX = {
  LOGIN_BASE: /^[a-zA-Z0-9._-]+$/,
  LOGIN_START: /^[a-zA-Z][a-zA-Z0-9._-]+$/,
  LOGIN_END: /^[a-zA-Z0-9._-]+[a-zA-Z0-9]$/,
  LOGIN_NO_DOUBLE: /^(?!.*(\.\.|--|__))/,

  PASSWORD_ALLOWED_CHARS: /^[a-zA-Z0-9!@#$%^&*()_+\-={}\[\]|:;"'<>,.?\/`~]+$/,
  HAS_UPPERCASE: /[A-Z]/,
  HAS_LOWERCASE: /[a-z]/,
  HAS_NUMBER: /[0-9]/,
  HAS_SPECIAL_CHAR: /[!@#$%^&*()_+\-={}\[\]|:;"'<>,.?\/`~]/,
  NO_THREE_SEQUENTIAL: /(.)\1\1/, // три одинаковых подряд

  // Email (если добавите)
  // EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Телефон
  // PHONE_RU: /^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
} as const;

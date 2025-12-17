from django.db import models
from core.models import TimeStampedModel, UUIDModel, SoftDeleteModel
import datetime

# Create your models here.
class User(models.Model, TimeStampedModel, UUIDModel, SoftDeleteModel):
  class sexChoices(models.TextChoices):
    MALE = 'мужчина', _('Мужчина')
    MALE = 'женщина', _('Женщина')
    NO_SPECIFIED = 'не указано', _('Не указано')

  username = models.CharField(max_length=20, unique=True, verbose_name='Логин', help_text=_('От 3 до 20 символов. Только буквы, цифры и .-_'))
  email = models.EmailField(blank=True, null=True, verbose_name=_('Email'), default=None)
  first_name = models.CharField(blank=True, null=True, verbose_name=_('Имя'), default=None)
  last_name = models.CharField(blank=True, null=True, verbose_name=_('Фамилия'), default=None)
  #photo_url = models.URLField(blank=True)
  birthday = models.DateField(blank=True, null=True, verbose_name=_('Дата рождения'), default=None, help_text='Формат: ГГГГ-ММ-ДД')
  city = models.CharField(blank=True, null=True, verbose_name=_('Город'), default=None, max_length=100)
  sex = models.CharField(blank=True, verbose_name=_('Пол'), default=sexChoices.NO_SPECIFIED, choices=sexChoices.choices)

  def getImage(self):
    pass

  @property
  def full_name(self) -> str:
    parts = [self.first_name, self.last_name]  
    parts = [p for p in parts if p and str(p).strip()]
    return ' '.join(parts) if parts else ''

  
  @property
  def age(self) -> int:
    return (datetime.now() - int(self.birthday[0:4])).days

  class Meta: 
    verbose_name = _('Пользователь')
    verbose_name_plural = _('Пользователи')
    ordering = ['-create_at']

    indexes = [
      models.Index(fields=['username']),
      models.Index(fields=['email']),
      models.Index(fields=['create_at']),
    ] 

    def __str__(self):
      if self.first_name and self.last_name:
        return f'{self.first_name} {self.last_name}'
      return self.username or str(self.pk)
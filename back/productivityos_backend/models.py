from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
import uuid

class TimeStampedModel(models.Model):
  created_at = models.DateTimeField(_('Создано'), auto_now_add=True, editable=False, db_index=True)
  update_at = models.DateTimeField(_('Обновлено'), auto_now=True, editable=False)

  class Meta:
    abstract = True
    ordering = ['-created_at']


class UUIDModel(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)

  class Meta:
    abstract = True

class SoftDeleteModel(models.Model):
  is_active = models.BooleanField(_('Активен'), default=True, db_index=True)
  deleted_at = models.DateTimeField(_('Дата удаления'), null=True, blank=True, editable=False)

  def delete(self, using=None, keep_parents=False):
    self.is_active = False
    self.deleted_at = timezone.now()
    self.save(update_fields=['is_active', 'deleted_at'])

  def hard_delete(self, using=None, keep_parents=False):
    super().delete(using=using, keep_parents=keep_parents)

  class Meta:
    abstract = True
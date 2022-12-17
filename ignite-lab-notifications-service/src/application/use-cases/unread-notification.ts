import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const notification = await this.notificationsRepository.findById(
      request.notificationId,
    );

    if (!notification) throw new NotificationNotFoundError();

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}

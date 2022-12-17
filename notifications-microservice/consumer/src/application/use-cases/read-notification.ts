import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const notification = await this.notificationsRepository.findById(
      request.notificationId,
    );

    if (!notification) throw new NotificationNotFoundError();

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}

import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { NotificationNotFoundError } from '@application/use-cases/errors/notification-not-found-error';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    const raw = await this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!raw) throw new NotificationNotFoundError();

    const notification = PrismaNotificationMapper.toDomain(raw);

    return notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        recipientId,
      },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return await this.prisma.notification.count({
      where: {
        recipientId,
      },
    });
  }

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: PrismaNotificationMapper.toPrisma(notification),
    });
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}

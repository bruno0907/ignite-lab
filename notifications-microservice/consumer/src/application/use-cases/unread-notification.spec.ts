import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationReposity);

    const notification = makeNotification({ readAt: new Date() });

    await notificationReposity.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationReposity.notifications[0].readAt).toBeNull();

    expect(notificationReposity.notifications[0].readAt).not.toEqual(
      expect.any(Date),
    );
  });

  it('should be not able to unread a notification that does not exist', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationReposity);

    expect(() =>
      unreadNotification.execute({
        notificationId: 'non-existent-id',
      }),
    ).rejects.toThrowError(NotificationNotFoundError);
  });
});

//45min

import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { ReadNotification } from './read-notification';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationReposity);

    const notification = makeNotification();

    await notificationReposity.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationReposity.notifications[0].readAt).toEqual(
      expect.any(Date),
    );

    expect(notificationReposity.notifications[0].readAt).not.toBeNull();
  });

  it('should be not able to read a notification that does not exist', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationReposity);

    expect(() =>
      readNotification.execute({
        notificationId: 'non-existent-id',
      }),
    ).rejects.toThrowError(NotificationNotFoundError);
  });
});

//45min

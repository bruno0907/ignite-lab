import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { NotificationNotFoundError } from './errors/notification-not-found-error';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationReposity);

    const newNotification = makeNotification();

    await notificationReposity.create(newNotification);

    await cancelNotification.execute({
      notificationId: newNotification.id,
    });

    expect(notificationReposity.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should be not able to cancel a notification that does not exist', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationReposity);

    expect(() =>
      cancelNotification.execute({
        notificationId: 'non-existent-id',
      }),
    ).rejects.toThrowError(NotificationNotFoundError);
  });
});

//45min

import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { NotificationNotFoundError } from './errors/notification-not-found-error';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count Recipients Notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationReposity,
    );

    await notificationReposity.create(makeNotification({ recipientId: '1' }));
    await notificationReposity.create(makeNotification({ recipientId: '2' }));
    await notificationReposity.create(makeNotification({ recipientId: '2' }));

    const recipient1 = await countRecipientNotifications.execute({
      recipientId: '1',
    });

    const recipient2 = await countRecipientNotifications.execute({
      recipientId: '2',
    });

    expect(recipient1.count).toBe(1);
    expect(recipient2.count).toBe(2);
  });

  it('should be not able to cancel a notification that does not exist', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationReposity);

    expect(() =>
      cancelNotification.execute({
        notificationId: 'non-existent id',
      }),
    ).rejects.toThrowError(NotificationNotFoundError);
  });
});

//45min

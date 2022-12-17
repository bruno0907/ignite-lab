import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipients Notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationReposity,
    );

    await notificationReposity.create(makeNotification({ recipientId: '1' }));
    await notificationReposity.create(makeNotification({ recipientId: '2' }));
    await notificationReposity.create(makeNotification({ recipientId: '2' }));

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: '2',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: '2' }),
        expect.objectContaining({ recipientId: '2' }),
      ]),
    );
  });
});

//45min

import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from '@application/use-cases/send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationReposity = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationReposity);
    const { notification } = await sendNotification.execute({
      category: 'send-notification',
      content: 'send-notification-test',
      recipientId: 'fake-uuid',
    });
    expect(notificationReposity.notifications).toHaveLength(1);
    expect(notificationReposity.notifications[0]).toEqual(notification);
  });
});

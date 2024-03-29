import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface NotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notifications')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: NotificationPayload,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
    console.log({
      message: 'Notification Sent',
      payload: {
        content,
        category,
        recipientId,
      },
    });
  }
}

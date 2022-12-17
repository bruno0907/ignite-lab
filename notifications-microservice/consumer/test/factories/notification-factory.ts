import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@application/entities/content';

type Override = Partial<NotificationProps>;

export const makeNotification = (override: Override = {}) =>
  new Notification({
    recipientId: '1',
    category: 'test',
    content: new Content('Factored notification test'),
    ...override,
  });

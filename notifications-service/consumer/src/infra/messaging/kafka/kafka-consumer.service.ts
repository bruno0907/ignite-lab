import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notification',
        brokers: ['tops-griffon-11226-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dG9wcy1ncmlmZm9uLTExMjI2JF17kieuIXmq9TLAwukrlFuvzdOB-mK3iVnIwsk',
          password:
            'YKUvECuWqaJ7fFhK3TyPVH-UOu0s51sfURfrKNq4WUycAND7eo893KaghkM3FuyYXnJqZg==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    this.close();
  }
}

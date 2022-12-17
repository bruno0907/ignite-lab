import { Kafka } from "kafkajs"
import { randomUUID } from "node:crypto"

const bootstrap = async () => {
  const kafka = new Kafka({
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
  })

  const producer = kafka.producer()

  await producer.connect()
  
  await producer.send({
    topic: 'notifications.send-notifications',
    messages: [
      {
        value: JSON.stringify({
          content: 'Kafka producer message test',
          category: 'kafka-test',
          recipientId: randomUUID()
        })
      }
    ]
  })

  await producer.disconnect()
}

bootstrap()
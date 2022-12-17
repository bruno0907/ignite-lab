import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBodyDTO {
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  @Length(5, 140)
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}

import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @ApiProperty({ example: 1, description: 'Идентификатор пользователя' })
  @Prop({
    type: Number,
    unique: true,
    index: true,
  })
  userId: number;

  @ApiProperty({
    example: 'test@yandex.ru',
    description: 'Email пользователя',
  })
  @Prop({
    required: [true, 'Укажите email.'],
    unique: [true, 'Такой email уже существует.'],
  })
  email: string;

  @ApiProperty({
    example: 'secretPassword',
    description: 'Пароль пользователя',
  })
  @Prop({
    required: [true],
  })
  password: string;

  @ApiProperty({
    example: false,
    description: 'Забанен пользователь или нет?',
  })
  @Prop({ type: Boolean, default: false })
  isBanned: boolean;

  @ApiProperty({
    example: 'Пропустил дедлайн',
    description: 'Причина бана',
  })
  @Prop({ type: String || null, default: null })
  banReason: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

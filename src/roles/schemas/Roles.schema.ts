import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RolesDocument = Roles & Document;

@Schema({ timestamps: true })
export class Roles {
  @ApiProperty({ example: 'ADMIN', description: 'Роль пользователя' })
  @Prop({
    required: [true, 'Укажите роль.'],
    unique: [true, 'Уникальное значение роли'],
  })
  value: string;

  @ApiProperty({
    example: 'Администратор',
    description: 'Описание роли пользователя',
  })
  @Prop({
    required: [true],
  })
  description: string;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);

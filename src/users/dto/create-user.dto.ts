import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@yandex.ru', description: 'Email пользователя' })
  readonly email: string;

  @ApiProperty({
    example: 'secretPassword',
    description: 'Пароль пользователя',
  })
  readonly password: string;
}

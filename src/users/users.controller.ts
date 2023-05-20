import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/User.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Запрос всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Создание нового пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post('create')
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}

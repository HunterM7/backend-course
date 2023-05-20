// NestJS
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose
import { Model } from 'mongoose';

// Local
import { User } from './schemas/User.schema';
import { UserDocument } from './schemas/User.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);

    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find();

    return users;
  }
}

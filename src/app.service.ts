import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers() {
    return [1, 2, 3];
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './model/users.model';
export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private readonly usersModel: typeof Users) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  get model() {
    return this.usersModel;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUsers(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = this.userRepository.findAll();
    return users;
  }
}

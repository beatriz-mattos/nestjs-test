import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto) {
    const currentMaxId = this.users[this.users.length - 1]?.id || 0; // pega id do ultimo ussuario
    const id = currentMaxId + 1;
    const user = { id, ...createUserDto };

    this.users.push(user);

     Logger.debug(`New user ${user.name} added :)`);

    return user;
  }

  findAll() {
    Logger.debug('Returning all users!')
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    return this.users[index];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const newUser = { ...user, ...updateUserDto };
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = newUser;

    return newUser;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) throw new NotFoundException(`User with id ${id} not found`)

    this.users.splice(index, 1);
  }
}

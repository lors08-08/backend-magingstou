import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  createUser(dto: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.save(dto);
  }
  getAllUsers() {
    return ['user'];
  }
  public async findByLogin(login: string) {
    return this.userRepository.findOne({ where: { login } });
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../User/services/user.service';
import { CreateUserDto } from '../../User/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from '../../User/entities/user.entity';
import { IJwtTokenDto } from '../dto/IJwtTokenDto';
import { ITokenUser } from '../types/ITokenUser';

@Injectable()
export class AuthService {
  public constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async signUp(userDto: CreateUserDto) {
    const candidate = await this.userService.findByLogin(userDto.login);
    if (!candidate) {
      throw new HttpException(
        'There is no user with such login',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  public async signIn() {}

  private generateToken(user: UserEntity): IJwtTokenDto {
    return {
      token: this.jwtService.sign({
        id: user.id,
        login: user.login,
        email: user.email,
      } as ITokenUser),
    };
  }
}

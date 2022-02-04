import { IsDefined, IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsDefined({ message: 'Login can not be empty' })
  @MinLength(6, {
    message: 'Login is too short - you need at least 6 characters',
  })
  @MaxLength(14, { message: 'Login is too long' })
  public login!: string;

  @IsEmail({}, { message: 'Invalid Email' })
  @IsDefined({ message: 'E-mail can not be empty' })
  public email!: string;

  @IsDefined({ message: 'Password can not be empty' })
  @MinLength(4, { message: 'Password is too short' })
  @MaxLength(14, { message: 'Password is too long' })
  public password!: string;
}

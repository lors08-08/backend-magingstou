import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './conrollers/auth.controller';
import { UserModule } from '../User/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
})
export class AuthModule {}

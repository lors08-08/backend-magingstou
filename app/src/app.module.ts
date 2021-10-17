import { Module } from '@nestjs/common';
import {UserModule} from "./User/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./User/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'batya',
    password: 'lors1968',
    database: 'postgres',
    entities: [UserEntity],
    synchronize: true,
  }),UserModule],

})
export class AppModule {}

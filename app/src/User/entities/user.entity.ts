import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true, nullable: false })
  login!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  public firstName!: string;

  @Column({ nullable: true })
  public lastName!: string;
}

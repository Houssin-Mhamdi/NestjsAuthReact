import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [User],
    synchronize: true,
  }),
  UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}

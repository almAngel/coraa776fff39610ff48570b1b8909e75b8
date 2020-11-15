import { ProductModule } from './../product/product.module';
import { ProductEntity } from './../product/product.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from '../user/user.entity';
import { Connection } from 'typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '7565b8a118267731cbdf55763df9fb58',
      entities: [UserEntity, ProductEntity],
      synchronize: true,
    }),
    UserModule,
    ProductModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}

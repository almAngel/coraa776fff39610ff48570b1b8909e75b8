import { TagModule } from './../tag/tag.module';
import { TagEntity } from './../tag/tag.entity';
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
    /*
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'eu-cdbr-west-03.cleardb.net',
      port: 3306,
      username: 'bd58e419ab06d3',
      password: '02a73297',
      database: 'heroku_4a851f6b83abc92',
      entities: [UserEntity, ProductEntity, TagEntity],
      dropSchema: true,
      synchronize: true,
    }),
    */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'eu-cdbr-west-03.cleardb.net',
      port: 3306,
      username: 'bd58e419ab06d3',
      password: '02a73297',
      database: 'heroku_4a851f6b83abc92',
      entities: [UserEntity, ProductEntity, TagEntity],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    TagModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { env } from 'process';
import { AppModule } from './modules/app/app.module';

const bootstrap = async function () {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Fancy Fruit API')
    .setDescription('Tropical fancy fruit official public API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({
    transform: false
  }));
  
  await app.listen(process.env.PORT || 3000, "https://coraa776fff39610ff48570b1b890.herokuapp.com/");
}();


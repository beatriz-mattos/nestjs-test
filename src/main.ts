import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // transforma dados p/ formato correto
      whitelist: true,
      forbidNonWhitelisted: true // throw nos campos que sao "extra"
    })
  );

  await app.listen(3000);
}
bootstrap();

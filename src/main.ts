import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  
  app.enableCors({
    origin: 'http://localhost:3100',
    methods: ['GET', 'POST'],
    credentials: true,
  });
  
  await app.listen(3001);
}
bootstrap();
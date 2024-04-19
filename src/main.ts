import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  app.setGlobalPrefix('api/v1');
  await app.listen(8080);
}
bootstrap();

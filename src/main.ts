import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// App module
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 7777;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Урок по Backend')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Anton Meshchaninov')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, function () {
    console.log(`Server started on port: ${PORT}`);
  });
}

start();

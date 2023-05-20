import { NestFactory } from '@nestjs/core';

// App module
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 8888;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, function () {
    console.log(`Server started on port: ${PORT}`);
  });
}

start();

import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';

// Providers
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

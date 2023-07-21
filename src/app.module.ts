import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma_client/prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
// import { AuthModule } from './auth/auth.module';
// import { TasksModule } from './tasks/tasks.module';
// import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AuthModule, TasksModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

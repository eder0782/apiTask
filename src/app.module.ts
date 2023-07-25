import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, TasksModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

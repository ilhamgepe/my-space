import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
    }),
    WebhooksModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

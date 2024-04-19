import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect().finally(() => console.log('database connected'));
  }
  async onModuleDestroy() {
    await this.$disconnect().finally(() =>
      console.log('database connection stoped'),
    );
  }
}

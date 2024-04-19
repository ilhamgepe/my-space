import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClerkWebhookMessage } from './clerk.types';

@Injectable()
export class WebhooksService {
  constructor(private prisma: PrismaService) {}

  async clerkUpSertUser(data: ClerkWebhookMessage) {
    try {
      await this.prisma.user.upsert({
        where: {
          email: data.data.email_addresses[0].email_address,
        },
        update: {
          email: data.data.email_addresses[0].email_address,
          first_name: data.data.first_name,
          last_name: data.data.last_name,
          image_url: data.data.image_url,
        },
        create: {
          email: data.data.email_addresses[0].email_address,
          first_name: data.data.first_name,
          last_name: data.data.last_name,
          image_url: data.data.image_url,
          ext_id: data.data.id,
        },
      });
      return 'ok';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}

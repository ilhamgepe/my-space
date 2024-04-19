import {
  BadRequestException,
  Controller,
  Post,
  RawBodyRequest,
  Req,
} from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { Webhook, WebhookRequiredHeaders } from 'svix';
import type { ClerkWebhookMessage } from './clerk.types';

@Controller('webhooks')
export class WebhooksController {
  constructor(
    private webhookService: WebhooksService,
    private config: ConfigService,
  ) {}

  @Post('clerk')
  async clerk(@Req() req: RawBodyRequest<Request>) {
    const hw = new Webhook(this.config.get('WH_CLERK_SECRET'));
    const payload = req.rawBody.toString('utf-8');
    const headers: WebhookRequiredHeaders = req.headers as any;

    try {
      const msg: ClerkWebhookMessage = hw.verify(payload, headers) as any;

      if (msg.type == 'user.created' || msg.type == 'user.updated') {
        return await this.webhookService.clerkUpSertUser(msg);
      }
      return 'ok';
    } catch (error) {
      console.log('error catch', { error });
      throw new BadRequestException(error);
    }
  }
}

import { Clerk } from '@clerk/clerk-sdk-node';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { ExtractJwt } from 'passport-jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @UseGuards(JwtGuard)
  async me(@Req() req: Request) {
    const clerk = Clerk({
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      secretKey: process.env.CLERK_SECRET_KEY,
      apiUrl: process.env.CLERK_API_URL,
      apiVersion: process.env.CLERK_API_VERSION,
    });

    // i can authenticateRequest here
    const authenticateRequest = await clerk.authenticateRequest({
      headerToken: ExtractJwt.fromAuthHeaderAsBearerToken()(req),
    });
    console.log({ authenticateRequest });

    // but i cant use any Clerk api e.g: clerk.clients / clerk.sessions etc
    const client = await clerk.sessions.getSessionList();
    console.log({ client });

    return { user: req.user };
  }
}

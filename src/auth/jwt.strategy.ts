import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import {
  ExtractJwt,
  Strategy,
  StrategyOptionsWithoutRequest,
} from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${configService.get(
          'CLERK_ISSUER_URL',
        )}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: `${configService.get('CLERK_ISSUER_URL')}`,
      algorithms: ['RS256'],
    } as StrategyOptionsWithoutRequest);
    console.log('jwt strategy initialize');
  }

  validate(payload: unknown): unknown {
    console.log('inside payload jswt strategy', payload);

    return payload;
  }
}

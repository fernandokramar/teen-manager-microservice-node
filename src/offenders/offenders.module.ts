import { ratingReviews  } from '@prisma/client';
import { registerEnumType } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { OffendersService } from './offenders.service';
import { OffendersResolver } from './offenders.resolver';

@Module({
  providers: [OffendersResolver, OffendersService]
})
export class OffendersModule {
  constructor() {
    registerEnumType(ratingReviews, {
      name: 'ratingReviews',
    });
  }
}

import { ratingReviews } from '@prisma/client';
import { registerEnumType } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { OffendersService } from './offenders.service';
import { OffendersResolver } from './offenders.resolver';
import { AddressesResolver } from 'src/addresses/addresses.resolver';
import { AddressesService } from 'src/addresses/addresses.service';
import { ComplementariesResolver } from 'src/complementaries/complementaries.resolver';
import { ComplementariesService } from 'src/complementaries/complementaries.service';

@Module({
  providers: [
    OffendersResolver,
    OffendersService,
    AddressesResolver,
    AddressesService,
    ComplementariesResolver,
    ComplementariesService,
  ],
})
export class OffendersModule {
  constructor() {
    registerEnumType(ratingReviews, {
      name: 'ratingReviews',
    });
  }
}

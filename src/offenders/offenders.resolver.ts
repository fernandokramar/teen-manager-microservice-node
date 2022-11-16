import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OffendersService } from './offenders.service';
import { Offender } from './entities/offender.entity';
import { CreateOffenderInput } from './dto/create-offender.input';
import { UpdateOffenderInput } from './dto/update-offender.input';
import { Address } from 'src/addresses/entities/address.entity';
import { AddressesService } from 'src/addresses/addresses.service';
import { Complementary } from 'src/complementaries/entities/complementary.entity';
import { ComplementariesService } from 'src/complementaries/complementaries.service';

@Resolver(() => Offender)
export class OffendersResolver {
  constructor(
    private readonly offendersService: OffendersService,
    private readonly addressesService: AddressesService,
    private readonly complementariesService: ComplementariesService,
  ) {}

  @ResolveField('address', () => Address)
  async address(@Parent() offender: Offender) {
    if (offender.address_uid) {
      return this.addressesService.findOne(offender.address_uid);
    }
  }

  @ResolveField('complementaries', () => Complementary)
  async complementary(@Parent() offender: Offender) {
    if (offender.complement_uid) {
      return this.complementariesService.findOne(offender.complement_uid);
    }
  }

  @Mutation(() => Offender)
  createOffender(@Args('createOffenderInput') createOffenderInput: CreateOffenderInput) {
    return this.offendersService.create(createOffenderInput);
  }

  @Query(() => [Offender], { name: 'offenders' })
  findAll() {
    return this.offendersService.findAll();
  }

  @Query(() => Offender, { name: 'offender' })
  findOne(@Args('uid', { type: () => String }) uid: string) {
    return this.offendersService.findOne(uid);
  }

  @Mutation(() => Offender)
  updateOffender(@Args('updateOffenderInput') updateOffenderInput: UpdateOffenderInput) {
    return this.offendersService.update(updateOffenderInput);
  }

  @Mutation(() => Offender)
  removeOffender(@Args('uid', { type: () => String }) uid: string) {
    return this.offendersService.remove(uid);
  }
}

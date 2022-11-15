import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AddressesService } from './addresses.service';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Resolver(() => Address)
export class AddressesResolver {
  constructor(private readonly addressesService: AddressesService) {}

  @Mutation(() => Address)
  createAddress(@Args('createAddressInput') createAddressInput: CreateAddressInput) {
    return this.addressesService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll() {
    return this.addressesService.findAll();
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('uid', { type: () => String }) uid: string) {
    return this.addressesService.findOne(uid);
  }

  @Mutation(() => Address)
  updateAddress(@Args('updateAddressInput') updateAddressInput: UpdateAddressInput) {
    return this.addressesService.update(updateAddressInput);
  }

  @Mutation(() => Address)
  removeAddress(@Args('uid', { type: () => String }) uid: string) {
    return this.addressesService.remove(uid);
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OffendersService } from './offenders.service';
import { Offender } from './entities/offender.entity';
import { CreateOffenderInput } from './dto/create-offender.input';
import { UpdateOffenderInput } from './dto/update-offender.input';

@Resolver(() => Offender)
export class OffendersResolver {
  constructor(private readonly offendersService: OffendersService) {}

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

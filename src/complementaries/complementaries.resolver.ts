import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComplementariesService } from './complementaries.service';
import { Complementary } from './entities/complementary.entity';
import { CreateComplementaryInput } from './dto/create-complementary.input';
import { UpdateComplementaryInput } from './dto/update-complementary.input';

@Resolver(() => Complementary)
export class ComplementariesResolver {
  constructor(private readonly complementariesService: ComplementariesService) {}

  @Mutation(() => Complementary)
  createComplementary(@Args('createComplementaryInput') createComplementaryInput: CreateComplementaryInput) {
    return this.complementariesService.create(createComplementaryInput);
  }

  @Query(() => [Complementary], { name: 'complementaries' })
  findAll() {
    return this.complementariesService.findAll();
  }

  @Query(() => Complementary, { name: 'complementary' })
  findOne(@Args('uid', { type: () => String }) uid: string) {
    return this.complementariesService.findOne(uid);
  }

  @Mutation(() => Complementary)
  updateComplementary(@Args('updateComplementaryInput') updateComplementaryInput: UpdateComplementaryInput) {
    return this.complementariesService.update(updateComplementaryInput);
  }

  @Mutation(() => Complementary)
  removeComplementary(@Args('uid', { type: () => String }) uid: string) {
    return this.complementariesService.remove(uid);
  }
}

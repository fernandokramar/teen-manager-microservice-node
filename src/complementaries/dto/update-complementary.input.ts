import { CreateComplementaryInput } from './create-complementary.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateComplementaryInput extends PartialType(CreateComplementaryInput) {
  @Field(() => String, { description: 'Complementary UID', nullable: false })
  uid: string;

  @Field(() => Date, { description: 'Complementary offenders senzure date', nullable: true })
  seizure_date: Date;

  @Field(() => String, { description: 'Complementary offenders seizure', nullable: true })
  seizure: string;

  @Field(() => Int, { description: 'Complementary offenders registry number', nullable: true })
  registry: number;

  @Field(() => String, { description: 'Complementary offenders picture', nullable: false })
  picture: string;

  @Field(() => String, { description: 'Complementary offenders socialname', nullable: false })
  socialname: string;

  @Field(() => Date, { description: 'Date and time the complementary was deleted', nullable: true })
  deleted_at?: Date | null;

}

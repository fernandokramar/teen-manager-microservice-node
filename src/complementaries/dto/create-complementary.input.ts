import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateComplementaryInput {
  @Field(() => Date, { description: 'Complementary offenders senzure date', nullable: true })
  seizure_date: Date;

  @Field(() => String, { description: 'Complementary offenders seizure', nullable: true })
  seizure: string;

  @Field(() => Int, { description: 'Complementary offenders registry number', nullable: true })
  registry: number;

  @Field(() => String, { description: 'Complementary offenders picture', nullable: false })
  picture: string;

}

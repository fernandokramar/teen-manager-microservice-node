import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Complementary {
  @Field(() => String, { description: 'Complementary UID', nullable: false })
  uid: string;

  @Field(() => Date, { description: 'Complementary offenders senzure date', nullable: true })
  seizure_date: Date;

  @Field(() => String, { description: 'Complementary offenders seizure', nullable: true })
  seizure: string | null;

  @Field(() => Int, { description: 'Complementary offenders registry number', nullable: true })
  registry: number;

  @Field(() => String, { description: 'Complementary offenders picture', nullable: false })
  picture: string;

  @Field(() => Date, { description: 'Date and time the complementary was deleted', nullable: true })
  deleted_at?: Date | null;

  @Field(() => Date, { description: 'Date and time the complementary was created', nullable: false })
  created_at: Date;

  @Field(() => Date, { description: 'Date and time the complementary was updated', nullable: true })
  updated_at?: Date;
}

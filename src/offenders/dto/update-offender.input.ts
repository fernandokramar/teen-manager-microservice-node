import { CreateOffenderInput } from './create-offender.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { ratingReviews } from '@prisma/client';

@InputType()
export class UpdateOffenderInput extends PartialType(CreateOffenderInput) {
  @Field(() => String, { description: 'Offenders UID', nullable: false })
  uid: string;

  @Field(() => String, { description: 'Offenders address UID', nullable: true })
  address_uid: string | null;

  @Field(() => String, { description: 'Offenders user UID', nullable: true })
  user_uid: string;

  @Field(() => String, { description: 'Offenders complement UID', nullable: true })
  complement_uid: string | null;

  @Field(() => String, { description: 'Offenders name', nullable: false })
  name: string;

  @Field(() => String, { description: 'Offenders socialname', nullable: false })
  socialname: string;

  @Field(() => String, { description: 'Offenders nickname', nullable: false })
  nickname: string;

  @Field(() => Date, { description: 'Offenders birth date', nullable: false })
  birth_date: Date;

  @Field(() => String, { description: 'Offenders document', nullable: false })
  document: string;

  @Field(() => Int, { description: 'Offenders age', nullable: false })
  age: number;

  @Field(() => ratingReviews, { description: 'Offenders gender', nullable: false })
  gender: ratingReviews;

  @Field(() => Boolean, { description: 'Offenders went through some crea or cras', nullable: false })
  crea_cras: boolean;

  @Field(() => Date, { description: 'Date and time the offenders was deleted', nullable: true })
  deleted_at?: Date | null;
}

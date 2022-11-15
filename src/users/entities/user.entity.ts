import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'User UID', nullable: false })
  uid: string;

  @Field(() => String, { description: 'User address UID', nullable: true })
  address_uid: string | null;

  @Field(() => String, { description: 'User name', nullable: false })
  name: string;

  @Field(() => String, { description: 'User email for login', nullable: false })
  email: string;

  @Field(() => String, { description: 'User password for login', nullable: false })
  password: string;

  @Field(() => Date, { description: 'Date and time the user was deleted', nullable: true })
  deleted_at?: Date | null;

  @Field(() => Date, { description: 'Date and time the user was created', nullable: false })
  created_at: Date;

  @Field(() => Date, { description: 'Date and time the user was updated', nullable: true })
  updated_at?: Date;
}

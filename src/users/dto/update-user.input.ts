import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'User UID', nullable: false })
  uid: string;

  @Field(() => String, { description: 'User address UID', nullable: true })
  address_uid: string;

  @Field(() => String, { description: 'User name', nullable: false })
  name: string;

  @Field(() => String, { description: 'User email for login', nullable: false })
  email: string;

  @Field(() => String, { description: 'User password for login', nullable: false })
  password: string;

  @Field(() => Date, { description: 'Date and time the user was deleted', nullable: true })
  deleted_at: Date | null;
}

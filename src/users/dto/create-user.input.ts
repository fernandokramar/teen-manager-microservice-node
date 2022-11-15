import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User address UID', nullable: true })
  address_uid: string;

  @Field(() => String, { description: 'User name', nullable: false })
  name: string;

  @Field(() => String, { description: 'User email for login', nullable: false })
  email: string;

  @Field(() => String, { description: 'User password for login', nullable: false })
  password: string;

}

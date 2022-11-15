import { InputType, Field } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @Field(() => Boolean, { description: 'User live in brazil.', nullable: false })
  resides_brazil: boolean;

  @Field(() => String, { description: 'User home address.', nullable: false })
  address: string;

  @Field(() => Number, { description: 'user home number.', nullable: true })
  number: number;

  @Field(() => String, { description: 'User home zip code.', nullable: true })
  zipcode: string;

  @Field(() => String, { description: 'State the user lives in.', nullable: false })
  state: string;
       
  @Field(() => String, { description: 'Complement the user lives in.', nullable: false })
  complement: string;
  
  @Field(() => String, { description: 'Referece the user lives in.', nullable: false })
  refenrece: string;
     
  @Field(() => String, { description: 'City the user lives in.', nullable: false })
  city: string;
}

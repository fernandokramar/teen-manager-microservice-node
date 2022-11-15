import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => String, { description: 'Address UID.', nullable: false })
  uid: string;
  
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

  @Field(() => Date, { description: 'Date and time the address was deleted.', nullable: true })
  deleted_at: Date;

  @Field(() => Date, { description: 'Date and time the address was created.', nullable: false })
  created_at: Date;

  @Field(() => Date, { description: 'Date and time the address was updated.', nullable: true })
  updated_at: Date;
}

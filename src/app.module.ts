import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { OffendersModule } from './offenders/offenders.module';
import { ComplementariesModule } from './complementaries/complementaries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      debug: true,
      playground: true,
    }),
    UsersModule,
    AddressesModule,
    OffendersModule,
    ComplementariesModule,
  ],
})
export class AppModule {}

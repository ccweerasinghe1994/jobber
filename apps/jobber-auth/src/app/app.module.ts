import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [PrismaModule,GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile:true,
    driver: ApolloDriver
  })],
})
export class AppModule {}

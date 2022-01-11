import { Module } from '@nestjs/common';
import { PeopleModule } from './people/people.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PeopleModule, PrismaModule],
})
export class AppModule {}

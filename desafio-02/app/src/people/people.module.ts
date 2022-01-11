import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { GeneratePeopleService } from 'src/common/generate-people/generate-people.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PeopleController],
  providers: [PeopleService, PrismaService, GeneratePeopleService],
})
export class PeopleModule {}

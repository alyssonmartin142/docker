import { Module } from '@nestjs/common';
import { GeneratePeopleService } from './generate-people.service';
import { GeneratePeopleController } from './generate-people.controller';

@Module({
  controllers: [GeneratePeopleController],
  providers: [GeneratePeopleService],
})
export class GeneratePeopleModule {}

import { Controller } from '@nestjs/common';
import { GeneratePeopleService } from './generate-people.service';

@Controller('generate-people')
export class GeneratePeopleController {
  constructor(private readonly generatePeopleService: GeneratePeopleService) {}
}

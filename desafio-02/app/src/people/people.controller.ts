import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    console.log(createPersonDto);
    return this.peopleService.create(createPersonDto);
  }

  @Get()
  async findAll() {
    await this.peopleService.createFaker();
    let response = '<h1>Full Cycle Rocks!</h1><ul></ul>';
    const itens = await this.peopleService.findAll();
    console.log(itens);
    response = '<ul>';
    for (const item of itens) {
      response += `<li>${item.id} - ${item.name}</li>`;
    }
    response += '</ul>';
    console.log(response);
    return response;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id);
  }
}

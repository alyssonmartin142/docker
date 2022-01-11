import { Injectable } from '@nestjs/common';
import { GeneratePeopleService } from 'src/common/generate-people/generate-people.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
// import { People, Prisma } from '@prisma/client';

@Injectable()
export class PeopleService {
  constructor(
    private prisma: PrismaService,
    private generatePeopleService: GeneratePeopleService,
  ) {}

  create(data: CreatePersonDto) {
    return this.prisma.people.create({
      data,
    });
  }

  async createFaker() {
    const name = await this.generatePeopleService.generateName();
    console.log(name);
    return this.create({
      name,
      email: '',
    });
  }

  findAll(): Promise<any> {
    return this.prisma.people.findMany();
  }

  findOne(id: number) {
    return this.prisma.people.findMany({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdatePersonDto) {
    return this.prisma.people.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.people.delete({
      where: {
        id,
      },
    });
  }
}

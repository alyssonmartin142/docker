import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';

@Injectable()
export class GeneratePeopleService {
  constructor(private httpService: HttpService) {}

  fetchNames(nameType: string) {
    return firstValueFrom(
      this.httpService
        .get(`https://www.randomlists.com/data/names-${nameType}.json`)
        .pipe(map((axiosResponse: AxiosResponse) => axiosResponse.data)),
    );
  }

  pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  async generateName(gender?: string) {
    try {
      const response = await Promise.all([
        this.fetchNames(gender || this.pickRandom(['male', 'female'])),
        this.fetchNames('surnames'),
      ]);

      const [firstNames, lastNames] = response;

      const firstName = this.pickRandom(firstNames.data);
      const lastName = this.pickRandom(lastNames.data);

      return `${firstName} ${lastName}`;
    } catch (error) {
      console.error('Unable to generate name:', error);
    }
  }
}

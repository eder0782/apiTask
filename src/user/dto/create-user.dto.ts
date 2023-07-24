// class Task

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  //   id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
}

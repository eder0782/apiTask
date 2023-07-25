import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  //  id        Int      @default(autoincrement()) @id
  @ApiProperty({
    description: 'Título da Tarefa',
    example: 'Conta de Luz',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Descrição da tafera',
    example: 'Pagar a conta de luz',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty({
    description: 'Indica se a tarefa já foi realizada',
    example: false,
  })
  @IsOptional()
  checked?: boolean;

  @ApiProperty({
    description: 'Data da tarefa',
    example: '2023-05-02',
  })
  @IsNotEmpty()
  expirationDate: Date;
  @IsOptional()
  //   @IsNumber()
  userId: number;
}

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma_client/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, createTaskDto: CreateTaskDto): Promise<Task> {
    const data: Prisma.TaskCreateInput = {
      ...createTaskDto,
      user: { connect: { id: Number(userId) } },
    };
    return await this.prisma.task.create({ data });
  }

  async findAll(userId: any): Promise<Task[]> {
    return await this.prisma.task.findMany({
      where: { userId: Number(userId) },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma_client/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createTaskDto: CreateTaskDto): Promise<Task> {
    const data: Prisma.TaskCreateInput = {
      ...createTaskDto,
      user: { connect: { id: userId } },
    };
    return await this.prisma.task.create({ data });
  }

  async findAll(userId: any): Promise<Task[]> {
    return await this.prisma.task.findMany({
      where: { userId: userId },
    });
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} task`;
  // }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const { userId, ...rest } = updateTaskDto;
    const data: Prisma.TaskUpdateInput = {
      ...rest,
      user: { connect: { id: userId } },
    };
    return await this.prisma.task.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<Task> {
    return await this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}

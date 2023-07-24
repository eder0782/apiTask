import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma_client/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User | undefined> {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: { id },
    });
    // `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

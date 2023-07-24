import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma_client/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User | undefined> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);

    return await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hash,
      },
    });
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.prisma.user.findMany();
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

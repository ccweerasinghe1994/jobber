import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma-clients/jobber-auth'; // Adjust the import based on your Prisma client setup
import { hash } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10), // Hash the password before saving
      },
    });
    
    // Convert numeric id to string for GraphQL ID type
    return {
      ...user,
      id: user.id.toString(),
    };
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();
    // Convert numeric ids to strings for GraphQL ID type
    return users.map(user => ({
      ...user,
      id: user.id.toString(),
    }));
  }
}

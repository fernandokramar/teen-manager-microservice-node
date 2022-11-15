import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import prisma from '../client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findUserById(uid: string) {
    const user = await prisma.user.findUnique({
      where: {
        uid,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async create(createUserInput: CreateUserInput) {
    return await prisma.user.create({
      data: {
        address_uid: createUserInput.address_uid,
        name: createUserInput.name,
        email: createUserInput.email,
        password: await bcrypt.hash(createUserInput.password, 10),
      },
    });
  }

  async findAll() {
    return await prisma.user.findMany({
      where: {
        OR: [
          {
            deleted_at: null,
          },
        ],
      },
    });
  }

  async findOne(uid: string) {
    return await prisma.user.findFirst({ where: { uid: uid } });
  }

  async update(updateUserInput: UpdateUserInput) {
    return await prisma.user.update({
      where: {
        uid: updateUserInput.uid,
      },
      data: {
        address_uid: updateUserInput.address_uid,
        name: updateUserInput.name,
        email: updateUserInput.email,
        password: await bcrypt.hash(updateUserInput.password, 10),
      },
    });
  }

  async remove(uid: string) {
    return await prisma.user.update({
      where: {
        uid: uid,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateComplementaryInput } from './dto/create-complementary.input';
import { UpdateComplementaryInput } from './dto/update-complementary.input';
import prisma from '../client';

@Injectable()
export class ComplementariesService {
  async create(createComplementaryInput: CreateComplementaryInput) {
    return await prisma.complementaries.create({
      data: {
        seizure_date: createComplementaryInput.seizure_date,
        seizure: createComplementaryInput.seizure,
        registry: createComplementaryInput.registry,
        picture: createComplementaryInput.picture,
      },
    });
  }

  async findAll() {
    return await prisma.complementaries.findMany({
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
    return await prisma.complementaries.findFirst({ where: { uid: uid } });
  }

  async update(updateComplementaryInput: UpdateComplementaryInput) {
    return await prisma.complementaries.update({
      where: {
        uid: updateComplementaryInput.uid,
      },
      data: {
        seizure_date: updateComplementaryInput.seizure_date,
        seizure: updateComplementaryInput.seizure,
        registry: updateComplementaryInput.registry,
        picture: updateComplementaryInput.picture,
      },
    });
  }

  async remove(uid: string) {
    return await prisma.complementaries.update({
      where: {
        uid: uid,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

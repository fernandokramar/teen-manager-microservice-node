import { Injectable } from '@nestjs/common';
import { CreateOffenderInput } from './dto/create-offender.input';
import { UpdateOffenderInput } from './dto/update-offender.input';
import prisma from '../client';

@Injectable()
export class OffendersService {
  async create(createOffenderInput: CreateOffenderInput) {
    return await prisma.offenders.create({
      data: {
        address_uid: createOffenderInput.address_uid,
        user_uid: createOffenderInput.user_uid,
        complement_uid: createOffenderInput.complement_uid,
        name: createOffenderInput.name,
        socialname: createOffenderInput.socialname,
        nickname: createOffenderInput.nickname,
        birth_date: createOffenderInput.birth_date,
        document: createOffenderInput.document,
        age: createOffenderInput.age,
        gender: createOffenderInput.gender,
        crea_cras: createOffenderInput.crea_cras,
      },
    });
  }

  async findAll() {
    return await prisma.offenders.findMany({
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
    return await prisma.offenders.findFirst({ where: { uid: uid } });
  }

  async update(updateOffenderInput: UpdateOffenderInput) {
    return await prisma.offenders.update({
      where: {
        uid: updateOffenderInput.uid,
      },
      data: {
        address_uid: updateOffenderInput.address_uid,
        user_uid: updateOffenderInput.user_uid,
        complement_uid: updateOffenderInput.complement_uid,
        name: updateOffenderInput.name,
        socialname: updateOffenderInput.socialname,
        nickname: updateOffenderInput.nickname,
        birth_date: updateOffenderInput.birth_date,
        document: updateOffenderInput.document,
        age: updateOffenderInput.age,
        gender: updateOffenderInput.gender,
        crea_cras: updateOffenderInput.crea_cras,
      },
    });
  }

  async remove(uid: string) {
    return await prisma.offenders.update({
      where: {
        uid: uid,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import prisma from '../client';

@Injectable()
export class AddressesService {
  async create(createAddressInput: CreateAddressInput) {
    return await prisma.address.create({
      data: {
        resides_brazil: createAddressInput.resides_brazil,
        address: createAddressInput.address,
        number: createAddressInput.number,
        zipcode: createAddressInput.zipcode,
        state: createAddressInput.state,
        complement: createAddressInput.complement,
        refenrece: createAddressInput.refenrece,
        city: createAddressInput.city,
      },
    });
  }

  async findAll() {
    return await prisma.address.findMany({
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
    return await prisma.address.findFirst({ where: { uid: uid } });
  }

  async update(updateAddressInput: UpdateAddressInput) {
    return await prisma.address.update({
      where: {
        uid: updateAddressInput.uid,
      },
      data: {
        resides_brazil: updateAddressInput.resides_brazil,
        address: updateAddressInput.address,
        number: updateAddressInput.number,
        zipcode: updateAddressInput.zipcode,
        state: updateAddressInput.state,
        complement: updateAddressInput.complement,
        refenrece: updateAddressInput.refenrece,
        city: updateAddressInput.city,
      },
    });
  }

  async remove(uid: string) {
    return await prisma.address.update({
      where: {
        uid: uid,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

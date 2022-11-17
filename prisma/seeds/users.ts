import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export default class UsersSeeder {
  public static async execute(address1: any, address2: any) {
    const user01 = await prisma.user.create({
      data: {
        uid: '01',
        email: 'fernando.kramar@gmail.com',
        name: 'fernando Kramar',
        password: await bcrypt.hash('123456', 10),
        address_uid: address1.uid,
      },
    });

    const user02 = await prisma.user.create({
      data: {
        email: 'vinicius.rodrigues@gmail.com',
        name: 'Vinicius Rodrigues',
        password: await bcrypt.hash('123456', 10),
        address_uid: address2.uid,
      },
    });

    return {
      user01,
      user02,
    };
  }
}

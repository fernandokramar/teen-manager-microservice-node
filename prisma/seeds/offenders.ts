import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class  OffendersSeeder {
  public static async execute(userId: any, address: any, complementaries: any) {
    const offender1 = await prisma.offenders.create({
      data: {
        user_uid: userId.uid,
        address_uid: address.uid,
        complement_uid: complementaries.uid,
        name: "Maria Silva",
        socialname: "maria",
        nickname: "Mar",
        birth_date: new Date("2008-10-10"),
        document: "14402548925",
        age: 14,
        gender: "female",
        crea_cras: true,
      },
    });

    const offender2 = await prisma.offenders.create({
      data: {
        user_uid: userId.uid,
        address_uid: address.uid,
        complement_uid:  complementaries.uid,
        name: "Marcos Mello",
        socialname: "Marcos",
        nickname: "Marcao",
        birth_date: new Date("2006-10-05"),
        document: "12265245871",
        age: 16,
        gender: "male",
        crea_cras: true,
      },
    });

    return {
      offender1,
      offender2,
    };
  }
}

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class ComplementariesSeeder {
  public static async execute() {

    const complementaries1 = await prisma.complementaries.create({
      data: {
        seizure_date: new Date("2022-11-22"),
        seizure: "furto",
        registry: 1548,
        picture: "imagem.png"
      },
    });

    const complementaries2 = await prisma.complementaries.create({
      data: {
        seizure_date: new Date("2020-08-10"),
        seizure: "estelionato",
        registry: 2545,
        picture: "imagem.png"
      },
    });

    return {
      complementaries1,
      complementaries2,
    };
  }
}

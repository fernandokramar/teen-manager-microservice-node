import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class AddressesSeeder {
  public static async execute() {
    const address1 = await prisma.address.create({
      data: {
        resides_brazil: true,
        address: 'Rua centro',
        number: 404,
        zipcode: '83030220',
        state: 'parana',
        complement: '5° andar',
        refenrece: 'predio',
        city: 'são jose dos pinhais',
      },
    });

    const address2 = await prisma.address.create({
      data: {
        resides_brazil: true,
        address: 'Rua xv',
        number: 308,
        zipcode: '83030250',
        state: 'parana',
        complement: '',
        refenrece: 'casa',
        city: 'são jose dos pinhais',
      },
    });

    const address3 = await prisma.address.create({
      data: {
        resides_brazil: true,
        address: 'Rua augusta',
        number: 8,
        zipcode: '83030450',
        state: 'parana',
        complement: '',
        refenrece: 'casa',
        city: 'são jose dos pinhais',
      },
    });

    const address4 = await prisma.address.create({
      data: {
        resides_brazil: true,
        address: 'Rua Dom',
        number: 550,
        zipcode: '83040550',
        state: 'parana',
        complement: '',
        refenrece: 'predio',
        city: 'são jose dos pinhais',
      },
    });

    return {
      address1,
      address2,
      address3,
      address4,
    };
  }
}

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import AddressesSeeder from './seeds/addresses';
import UsersSeeder from './seeds/users';
import ComplementariesSeeder from './seeds/complementaries';
import OffendersSeeder from './seeds/offenders';

async function main() {
  const { address1, address2, address3, address4 } = await AddressesSeeder.execute();
  const { user01, user02 } = await UsersSeeder.execute(address1, address2);
  const { complementaries1 } =await ComplementariesSeeder.execute();
  const { complementaries2 } = await ComplementariesSeeder.execute();
  await OffendersSeeder.execute(user01 ,address3, complementaries1);
  await OffendersSeeder.execute(user02, address4, complementaries2);

  console.log(user01, user02);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

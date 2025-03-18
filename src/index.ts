import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const customer = await prisma.customer.create({
    data: {
      first_name: 'Sam',
      last_name: 'Magura',
    },
  });

  console.log(`Created customer: ${customer.id}`);

  const allCustomers = await prisma.customer.findMany();

  console.log('All customers:', allCustomers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

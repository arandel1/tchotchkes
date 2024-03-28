import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Prisma Client queries go here
  // Add user query:
  // const user = await prisma.users.create({
  //   data: {
  //     name: "Walter White",
  //     email: "walter@white.com",
  //     password: "heisenberg",
  //   },
  // });
  // View all users query:
  const users = await prisma.users.findMany();
  console.log(users);
}
main();

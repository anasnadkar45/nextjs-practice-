import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data:{
        title:"nextjs 14 blog",
        content:"next 14 comes with a new blog in the latest version",
        author:{
            connect:{
                id:1
            }
        }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
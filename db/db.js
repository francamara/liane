import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.post.create({
  data: {
    title: 'First post',
    content: 'This is the first post in the blog. It says all sorts of wonderful things.'
  }
})


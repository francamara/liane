import prisma from '../../../lib/prisma'

// GET /api/post/:id, returns post data from single post, includes author's name and email
export default async (req, res) => {
  const postId = JSON.parse(req.body.id)

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })

  res.status(200).json(post)
}

import prisma from '../../../../lib/prisma'

// PUT /api/addViews/:id, increments viewcount by one
export default async function handle(req, res) {
  const postId = JSON.parse(req.body.id)

  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const post = await prisma.post.update({
    where: { id: Number(postId) },
    data: {
      viewcount: {
        increment: 1,
      },
    },
  })
  res.status(200).json(post)
}


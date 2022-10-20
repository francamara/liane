import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

// PUT /api/publish/:id, updates published to true
export default async function handle(req, res) {
  const postId = JSON.parse(req.body.id)
  const session = await getSession({ req })

  if (session) {
    if (req.method !== 'DELETE') {
      return res.status(405).json({ message: 'Method not allowed' })
    }

    const post = await prisma.post.delete({
      where: { id: postId },
    })
    res.status(204).json(post)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}

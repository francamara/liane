import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

// PUT /api/publish/:id, updates published to true
export default async function handle(req, res) {
  const postId = JSON.parse(req.body.id)
  const session = await getSession({ req })

  if (session) {
    if (req.method !== 'PUT') {
      return res.status(405).json({ message: 'Method not allowed' })
    }

    const post = await prisma.post.update({
      where: { id: postId },
      data: { published: true },
    })
    res.status(200).json(post)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}

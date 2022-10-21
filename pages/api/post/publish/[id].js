import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

// PUT /api/publish/:id, updates published to true
export default async function handle(req, res) {
  const postId = JSON.parse(req.body.id)
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).send({ success: false, message: 'Unauthorized' })
  }
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }
  if (!postId) {
    return res.status(404).json({ success: false, message: 'Not found' })
  }

  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  })

  if (!post) {
    return res.status(404).json({ success: false, message: 'Not found' })
  }

  res.status(200).json({ success: true, post })
}

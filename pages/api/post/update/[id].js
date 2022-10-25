import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

// PUT /api/update/:id, updates post content or title
export default async function handle(req, res) {
  const postId = req.query.id
  const postContent = req.body
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).send({ success: false, message: 'Unauthorized' })
  }
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }
  if (!postId) {
    return res.status(400).json({ success: false, message: 'Need a post id to find post' })
  }

  const post = await prisma.post.update({
    where: { id: postId },
    data: {
      content: postContent,
      updatedAt: new Date(),
    },
  })


  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' })
  }

  res.status(200).json({ success: true, post })
}

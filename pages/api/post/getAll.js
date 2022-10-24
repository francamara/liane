import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

// GET /api/user/getByEmail, returns all posts
export default async function handle(req, res) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).send({ success: false, message: 'Unauthorized' })
  }
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const post = await prisma.post.findMany()

  if (!post) {
    return res.status(404).json({ success: false, message: 'No posts found' })
  }

  res.status(200).json({ success: true, post })
}

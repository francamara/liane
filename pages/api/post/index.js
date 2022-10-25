import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/post, creates new post
export default async function handler(req, res) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const result = await prisma.post.create({
    data: {
      title: 'Nuevo post',
      author: { connect: { email: session.user.email } },
    },
  })
  res.status(201).json({ success: true, result })
}

import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/post, creates new post
// Required fields in body: title
export default async function handler(req, res) {
  const title = JSON.parse(req.body.title)
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }
  if (!title) {
    return res.status(400).json({ success: false, message: 'Posts require a title' })
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      author: { connect: { email: session.user.email } },
    },
  })
  res.status(201).json({ success: true, result })
}

import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/post, creates new post
// Required fields in body: title
// Optional fields in body: content
export default async function handler(req, res) {
  const { title, content } = JSON.parse(req.body)
  const session = await getSession({ req })

  if (session) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' })
    }

    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session.user.email } },
      },
    })
    res.status(201).json(result)
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

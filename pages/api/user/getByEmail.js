import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

// GET /api/user/getByEmail, returns user data of logged user
export default async function handler(req, res) {
  const session = await getSession({ req })

  if (session) {
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method not allowed' })
    }

    const result = await prisma.post.findUnique({
      where: {
        email: session.user.email,
      },
    })
    res.status(200).json(result)
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

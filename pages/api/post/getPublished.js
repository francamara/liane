import prisma from '../../../lib/prisma'

// GET /api/user/getByEmail, returns all published posts
export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const post = await prisma.post.findMany({
    where: {
      published: true
    }
  })

  if (!post) {
    return res.status(404).json({ success: false, message: 'Not found' })
  }

  res.status(200).json({ success: true, post })
}

import prisma from '../../../lib/prisma'

// GET /api/post/:id, returns post data from single post, includes author's name and email
export default async (req, res) => {
  const postId = req.query.id

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  if (!postId) {
    return res.status(400).json({ success: false, message: 'Need a post id to find post' })
  }

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' })
  }

  res.status(204)
}

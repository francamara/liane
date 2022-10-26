import prisma from '../../../../lib/prisma'

// PUT /api/addViews/:id, increments viewcount by one
export default async function handle(req, res) {
  const postId = req.query.id

  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  if (!postId) {
    return res.status(400).json({ success: false, message: 'Need a post id to find post' })
  }

  const post = await prisma.post.update({
    where: { id: postId },
    data: {
      viewcount: {
        increment: 1,
      },
    },
  })

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' })
  }

  res.status(200).json({ success: true, post })
}


import prisma from '../../../lib/prisma'

// GET /api/user/getByEmail, returns all posts or all posts if published field is true
// Optional fields in body: published
export default async (req, res) => {
  const { published } = JSON.parse(req.body.published) || false

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  let post
  if (published) {
    post = await prisma.post.findMany({
      where: {
        published: true
      }
    })
  } else {
    post = await prisma.post.findMany()
  }

  res.status(200).json(post)
}

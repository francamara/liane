import prisma from '../../lib/prisma'

// POST /api/message, creates new message
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const message = JSON.parse(req.body)

  const result = await prisma.message.create({
    data: {
      name: message.name,
      email: message.email,
      phone: message.phone,
      city: message.city,
      country: message.country,
      content: message.content
    },
  })
  res.status(201).json({ success: true, result })
}

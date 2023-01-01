import { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID || '',
      {
        email_address: email,
        status: 'subscribed'
      }
    )

    const list = await mailchimp.lists.getList(
      process.env.MAILCHIMP_AUDIENCE_ID || ''
    )

    console.log({ list })

    return res.status(201).json({ error: null })
  } catch (error) {
    if (/looks fake/i.test(JSON.stringify(error))) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    if (/member exists/i.test(JSON.stringify(error))) {
      return res.status(400).json({ error: 'Already subscribed to newsletter' })
    }

    return res.status(500).json({ error: 'Unable to subscribe to newsletter' })
  }
}

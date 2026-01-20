import { NextRequest, NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID || '',
      {
        email_address: email,
        status: 'subscribed'
      }
    )

    return NextResponse.json({ error: null }, { status: 201 })
  } catch (error) {
    if (/looks fake/i.test(JSON.stringify(error))) {
      return NextResponse.json(
        { error: 'Hmm... looks fake to me.' },
        { status: 400 }
      )
    }

    if (/member exists/i.test(JSON.stringify(error))) {
      return NextResponse.json(
        { error: 'Already subscribed to newsletter' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Unable to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

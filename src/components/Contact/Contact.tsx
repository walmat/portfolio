import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-hot-toast'
import { useAnimation, AnimationControls } from 'framer-motion'

import { Arrow } from '..'

import * as S from './styles'

interface EmailForm {
  email: string
}

interface EmailFormErrors {
  email?: string
}

const initial = {
  x: 0
}

const wiggle = {
  x: [-6, 4, -6, 4, 0],
  transition: {
    duration: 0.4,
    times: [0, 0.25, 0.5, 0.75, 1]
  }
}

const validate = (animation: AnimationControls, values: EmailForm) => {
  const errors: EmailFormErrors = {}

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
    animation.start('wiggle')
  }

  return errors
}

function Contact() {
  const [title, setTitle] = useState("Let's stay in touch")
  const animation = useAnimation()

  const subscribe = async (email: string) => {
    toast.dismiss()

    if (!email) {
      return
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })

      if (res.ok) {
        setTitle('Thanks for subscribing!')
        values.email = ''
        return
      }

      const { error } = await res.json()
      if (error) {
        errors.email = error
      }
    } catch (error) {
      // noop
    }
  }

  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: { email: '' },
    validateOnMount: false,
    validateOnChange: true,
    validate: (values) => validate(animation, values),
    onSubmit: ({ email }) => subscribe(email)
  })

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Copy>
        <S.Title>{title}</S.Title>
        <S.Text>
          Content includes articles, early access to products, and ongoing
          learnings.
        </S.Text>
      </S.Copy>

      <S.Subscribe
        id="email"
        name="email"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        initial={initial}
        animate={errors.email && wiggle}
        placeholder="Email address"
      />

      <S.Footer>
        <S.Button type="submit">
          <Arrow />
          <S.ButtonText>Subscribe</S.ButtonText>
        </S.Button>

        {errors.email && <S.Error>{errors.email}</S.Error>}
      </S.Footer>
    </S.Wrapper>
  )
}

export default Contact

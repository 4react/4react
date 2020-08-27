import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import FormData from './FormData'
import FormField from './FormField'

export default {
  component: Form,
  title: 'form/Form'
}

const StoryForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StoryField = styled.input`
  width: 150px;
  height: 30px;
  margin: 10px;
  border: 1px solid ${p => (p.isValid ? '#666' : '#faa')};
  outline: none;
`

const StoryValues = styled.input.attrs({
  type: 'text',
  disabled: true
})`
  width: 500px;
  height: 30px;
  margin: 10px;
`

export const Basic = () => (
  <Form initialValues={{ username: 'Mario' }}>
    <StoryForm>
      <FormField name="username" accept={/^\w+$/}>
        {({ value, update, valid }) => (
          <StoryField
            type="text"
            value={value}
            isValid={valid}
            onChange={e => update(e.target.value)}
          />
        )}
      </FormField>
      <FormField name="age" accept={/^[1-9][0-9]*$/}>
        {({ update, valid }) => <StoryField type="text" isValid={valid} onChange={e => update(e.target.value)} />}
      </FormField>
      <FormField name="password" accept={/^\w+$/}>
        {({ update, valid }) => <StoryField type="password" isValid={valid} onChange={e => update(e.target.value)} />}
      </FormField>
      <FormData>
        {({ values, valid }) => (
          <>
            <StoryValues value={JSON.stringify(values)} />
            <StoryValues value={`${valid ? '' : 'NOT '}VALID`} />
          </>
        )}
      </FormData>
    </StoryForm>
  </Form>
)

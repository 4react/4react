import mount from 'cypress-react-unit-test'
import React from 'react'
import { Basic } from './StoryContent.stories'

describe('StoryContent', () => {
  it('Match snapshot', () => {
    mount(<Basic {...Basic.args} />)
    cy.getDataTest('test').matchSnapshot();
  })

  it('With name', () => {
    const name = 'test content'
    const { container } = mount(<Basic {...Basic.args} name={name} />)
    const label = container.querySelector('span')
    expect(label).toBeDefined()
    expect(queryByText(label, name)).toBeDefined()
  })

  it('Margins (single param)', () => {
    const { container } = render(<Basic {...Basic.args} margin={10} />)
    const component = container.querySelector('div')
    expect(component.style.margin).toBe('10px 10px 10px 10px')
  })

  it('Margins (array)', () => {
    const { container } = render(<Basic {...Basic.args} margin={[10, 20]} />)
    const component = container.querySelector('div')
    expect(component.style.margin).toBe('10px 20px 10px 20px')
  })

  it('Margins (object)', () => {
    const { container } = render(<Basic {...Basic.args} margin={{ base: 10, left: 30 }} />)
    const component = container.querySelector('div')
    expect(component.style.margin).toBe('10px 10px 10px 30px')
  })
})

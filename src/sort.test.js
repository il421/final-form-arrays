import sort from './sort'

describe('sort', () => {
  it('should sort an array bases on compareFunc once', () => {
    const compareFunc = (a, b) => {
      const nameA = a.toUpperCase()
      const nameB = b.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    }

    const setIn = jest.fn()

    const state = {
      fields: {
        'foo[0]': {
          name: 'foo[0]'
        },
        'foo[1]': {
          name: 'foo[1]'
        }
      },
      formState: {
        values: {
          foo: ['carrot', 'date', 'apple', 'banana']
        }
      }
    }

    const result = ['apple', 'banana', 'carrot', 'date']

    sort(['foo', compareFunc], state, { setIn })
    expect(setIn.mock.calls[0][0].formState.values.foo).toEqual(result)
  })
})

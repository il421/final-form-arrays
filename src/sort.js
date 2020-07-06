// @flow
import type { MutableState, Mutator, Tools } from 'final-form'

const sort: Mutator<any> = (
  [name, compareFn]: [string, (a: any, b: any) => number],
  state: MutableState<any>,
  { setIn }: Tools<any>
) => {
  const sortedArray = state.formState.values[name].sort(compareFn)
  setIn(state, 'formState.values' + name, sortedArray)
}

export default sort

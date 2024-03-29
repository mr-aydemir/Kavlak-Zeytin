import { mutations } from '../../store'

// destructure assign `mutations`
const { incrementTest } = mutations

describe('mutation testi', () => {
    it('INCREMENT', () => {
        // mock state
        const state = { testCount: 0 }
        // apply mutation
        incrementTest(state,3)
        // assert result
        expect(state.testCount).toEqual(3)
    })
})


import React from 'react'
import { shallow} from 'enzyme'
import {DisplayCounter} from './DisplayCounter'


describe('<DisplayCounter />', () => {
    it('monts', () => {
        const wrapper = shallow(< DisplayCounter count={0} />)
        expect(wrapper.contains(<p>O Contador esta em : 0 </p>))
        .toBe(true)
    } )
})
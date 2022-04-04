import React from 'react'
import { shallow} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {DisplayCounter} from './DisplayCounter'


configure({adapter: new Adapter()})
describe('<DisplayCounter />', () => {
    it('monts', () => {
        const wrapper = shallow(< DisplayCounter count={0} />)
        expect(wrapper.contains(<p>O Contador esta em : 0 </p>))
        .toBe(true)
    } )
})
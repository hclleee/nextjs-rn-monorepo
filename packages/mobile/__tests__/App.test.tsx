import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { App } from '@nextjs-rn-monorepo/app'

it('renders correctly', () => {
  renderer.create(<App />)
})

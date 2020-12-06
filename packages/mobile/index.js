import { AppRegistry } from 'react-native'
import { App } from '@nextjs-rn-monorepo/app'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

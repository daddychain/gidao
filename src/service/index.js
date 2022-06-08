import env from './env'
import test from './test'
import gray from './gray'
import main from './main'

const MetaMaskConfig = {
  ...test,
  ...gray,
  ...main,
}

export default MetaMaskConfig[env]

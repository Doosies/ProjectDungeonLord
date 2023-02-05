import { css } from '@emotion/react'
import tw from 'twin.macro'

const box = css([
  tw`bg-red-400 tablet:bg-green-400 desktop:bg-blue-400`,
  tw`text-6xl`,
])
const App = () => <div css={box}>fdf 123 안녕 asdf ASFASF</div>

export default App

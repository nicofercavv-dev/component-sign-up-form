import styled from 'styled-components'
import bg from './bg-intro-desktop.png'

const Page = styled.main`
    height: 100vh;
    width: 100vw;
    background-color: hsl(0, 100%, 74%);
    background-image: url(${bg});
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default Page
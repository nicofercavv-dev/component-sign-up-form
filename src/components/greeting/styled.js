import styled from 'styled-components'

const GreetingTexts = styled.article`
    max-height: 350px;
    max-width: 500px;
    padding-left: 70px;
    /* margin-right: -30px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-size: 40px;
        margin-bottom: 20px;
    }
    p {
        color: white;
        line-height: 1.75em;
    }
`

export default GreetingTexts

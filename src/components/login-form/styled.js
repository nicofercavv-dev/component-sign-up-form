import styled from 'styled-components'

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        height: 50px;
        width: 69%;
        padding: 0px 30px;
        border: none;
        border-radius: 8px;
        font-size: 13px;
        background-color: hsl(248, 32%, 49%);
        color: white;
        margin-bottom: 20px;
        box-shadow: 0px 7px 0px hsla(0, 100%, 30%, 13%);
    }
`
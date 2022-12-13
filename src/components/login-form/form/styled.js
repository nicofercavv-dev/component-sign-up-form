import styled from 'styled-components'

const Forms = styled.form`
    background-color: white;
    height: 58%;
    width: 63%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    border-radius: 10px;

    input {
        border: 1px solid hsl(246, 25%, 92%);
        border-radius: 4px;
        padding: 0px 10px;
        width: 90%;
        height: 12%;

        &:focus {
            border: 1px solid hsl(249, 10%, 26%);
        }
    }
    .submit {
        background-color: hsl(154, 59%, 51%);
        width: 95%;
        padding: 0pc 10px;
        margin-bottom: 0;
        border-radius: 5px;
        box-shadow: 0px -2px 2px hsl(154, 59%, 40%) inset;

        &:hover {
            cursor: pointer;
        }
    }
    p {
        margin-top: -5px;
        font-size: 10px;
        color: hsl(246, 25%, 77%);

        a {
            text-decoration: none;
            color: hsl(0, 100%, 74%);
        }
    }
`

export default Forms
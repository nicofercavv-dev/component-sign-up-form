import Message from "../Message/styled"
const Input = ({ type, name, onChange, data }) => {
    const placeholder = {
        "firstName": "First Name",
        "lastName": "Last Name",
        "email": "Email Address",
        "password": "Password"
    }

    return (
        <>
            <input type={type} name={name} placeholder={placeholder[name]} onChange={onChange}/>
            <Message>{data[name] ? null : `${placeholder[name]} cannot be empty`}</Message>
        </>
    )
}

export default Input
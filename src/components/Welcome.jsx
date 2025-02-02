const Welcome = ({name,email}) =>{
    return (
        <div>
            <p>
                Hello {name}, How are you?
                <br />
                {email} is this your email?
            </p>
        </div>
    )
}
export default Welcome;
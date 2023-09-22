import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [eroor, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
        }
        console.log(name, email, password)
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasseordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasseordChange} type="password" name="password" required />
                <br />
                
                <input type="submit" value="Submit" />
                {
                    eroor && <p>{eroor}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;

import useimputState from "../../hooks/useimputState";


const HookForm = () => {
    // const nameState = useInputstate('vhgg')
    const emailState = useimputState('rojoni@sojoni.go')

    const handleSubmit =e => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
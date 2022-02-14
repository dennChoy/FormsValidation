import { useState } from 'react';
import './SimpleInput.css';

const SimpleInput = ()=> {
    const [enteredUser, setEnteredUser] = useState("");
    const [enteredUserTouched, setEnteredUserTouced] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouced] = useState(false);


    const enteredUserIsValid = enteredUser.trim() !== "";
    const userInputIsInvalid = !enteredUserIsValid && enteredUserTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if(enteredUserIsValid && enteredEmailIsValid){
        formIsValid = true;
    }

    const userInputChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }
    const userInputBlurHandler = (event) => {
        setEnteredUserTouced(true);
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouced(true);
    }

    const formSubmisionHandler = (event) => {
        event.preventDefault();
        setEnteredUserTouced(true);
        if(!enteredUserIsValid){
            return;
        }
        console.log(enteredUser);
        setEnteredUser('');
        setEnteredUserTouced(false);
        setEnteredEmail('');
        setEnteredEmailTouced(false);
    }

    const userInputClasses = userInputIsInvalid ? 'form-control invalid' : 'form-control';

    return(
        <form className="UserForm" onSubmit={formSubmisionHandler}>
            <div className='FormGroup'>
                <label htmlFor='user'>User</label>
                <input 
                    id='user' 
                    type='text'
                    onChange={userInputChangeHandler}
                    onBlur={userInputBlurHandler}
                    value={enteredUser}
                />
               {userInputIsInvalid && (
                   <p className='error-text'>User must not be empty</p>
               )}
            </div>
            <div className='FormGroup'>
                <label htmlFor='email'>E-mail</label>
                <input 
                    id='email' 
                    type='text'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                   <p className='error-text'>Email must not be valid</p>
               )}
            </div>
            <div className='FormActions'>
                <button disabled={!formIsValid} className='btnSubmit' type="submit">Send Data</button>
            </div>
        </form>
    );
}

export default SimpleInput;
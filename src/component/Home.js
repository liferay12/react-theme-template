import React from 'react';
import Form from '../library/renderer/FormRenderer';
import form from '../form.json'

const Home = () => {
    const submitFunc = (event) => {
        event.preventDefault();
        console.log(event);
    }
    return (
        <div className='Home'>
            <Form formObject={form} submit={(event) => submitFunc(event)} />
        </div>
    );
}

export default Home;
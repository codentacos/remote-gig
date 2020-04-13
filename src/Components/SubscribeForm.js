import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class SubscribeForm extends Component {
    render() {
        return (
            <Mailchimp
                action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
                className='subscribe-form'
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    },
                    {
                        name: 'FNAME',
                        placeholder: 'name',
                        type: 'text',
                        required: true
                    },
                    {
                        name: 'LNAME',
                        placeholder: 'name',
                        type: 'text',
                        required: true
                    }
                ]}
            />
        );
    }
}

export default SubscribeForm;
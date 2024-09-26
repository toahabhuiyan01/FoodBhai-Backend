import { MailtrapClient } from "mailtrap"

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = process.env.MAILTRAP_TOKEN!
const SENDER_EMAIL = "<SENDER@YOURDOMAIN.COM>";
const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";
import axios from 'axios';

async function sendEmail() {
    const response = await axios.post(
    'https://sandbox.api.mailtrap.io/api/send/3164959',
    {
        'from': {
            'email': 'toahabhuiyan@gmail.com',
            'name': 'Mailtrap Test'
        },
        'to': [
            {
                'email': 'toahabhuiyan@gmail.com'
            }
        ],
        'subject': 'You are awesome!',
        'text': 'Congrats for sending test email with Mailtrap!',
        'category': 'Integration Test'
    },
    {
        headers: {
            'Authorization': 'Bearer 415b1e772fc488aa5bc4a249e8038b23',
            'Content-Type': 'application/json'
        }
    }
    );
}

sendEmail()
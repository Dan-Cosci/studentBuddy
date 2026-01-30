import {client, from } from "../config/mailtrap.js";

export const sendVerification = async (email,name,code) => {
    await client.send({
        from: from,
        to: [{email: email, name: name}],
        subject: "Email Verification",
        html: `
            <p>Your verification code is: <strong>${code}</strong></p>
        `
    })
}
import { NextResponse, NextRequest } from 'next/server'
import * as nodemailer from 'nodemailer'
// Handles POST requests to /api

export async function POST(request) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL

    const formData = await request.formData()
    const firstname = formData.get('first-name')
    const lastname = formData.get('last-name')
    const budget = formData.get('budget')
    const website = formData.get('website')
    const email = formData.get('email')
    const message = formData.get('message')
    console.log(username, password, formData)

    const transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        // secure: true,
        tls: {
            ciphers: 'SSLv3',
        },
        port: 587,
        auth: {
            user: username,
            pass: password,
        },
    })

    try {
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            // replyTo: email,
            subject: `Kontaktanfrage von ${website}`,
            html: `
            <p>Vorname: ${firstname || 'nicht vorhanden'} </p>
            <p>Nachname: ${lastname || 'nicht vorhanden'} </p>
            <p>Budget: ${budget || 'nicht vorhanden'} </p>
            <p>Tel./E-Mail: ${website || 'nicht vorhanden'} </p>
             <p>Nachricht: ${message} </p>
            `,
        })

        return NextResponse.json({ message: 'Success: email was sent' })
    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' })
    }
}

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/verify-email?token=${token}`;

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.log("----------------------------------------------------");
        console.log("WARNING: Email environment variables not set.");
        console.log(`Mock Sending Email to: ${email}`);
        console.log(`Confirm Link: ${confirmLink}`);
        console.log("----------------------------------------------------");
        return;
    }

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
    });
};

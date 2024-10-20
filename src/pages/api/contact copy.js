import { Resend } from 'resend';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const resend = new Resend('re_faLUdjTK_PcwBgbC5yWHjHhB8LWtD4RUR');
            const result = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: ['delivered@resend.dev'],
                subject: 'hello world',
                html: '<p>it works!</p>',
            });

            res.status(200).json({ success: true, result });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export const Mailer = ({
  name,
  email,
  message,
}: {
  name: string;
  message: string;
  email: string;
}) => {
  return `
     <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Contact Form</title>
  </head>
  <body style="margin:0; padding:0; font-family:Arial, sans-serif; background:#f4f4f4;">
    <table width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f4; padding:20px;">
      <tr>
        <td>
          <table width="600" align="center" cellspacing="0" cellpadding="0" style="background:#fff; border-radius:8px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
            <tr>
              <td style="text-align:center; padding-bottom:20px;">
                <h2 style="color:#333; margin:0;">📩 New Contact Message</h2>
              </td>
            </tr>
            <tr>
              <td>
                <p style="font-size:16px; color:#555;">
                  <strong>Name:</strong> ${name}<br/> <br/>
                  <strong>Email:</strong> ${email}
                </p>
<br/>
                <div style="margin-top:20px; padding:15px; background:#f9f9f9; border-left:4px solid #007BFF; border-radius:5px;">
                  <p style="font-size:15px; line-height:1.6; color:#333; margin:0;">
                    ${message}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding-top:20px; text-align:center;">
                <p style="font-size:14px; color:#888;">This message was sent from your portfolio contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
    `;
};

const email = (user, url,token ) => {
  return `
  <div style="background:#f9f9f9">
  <div style="background-color:#f9f9f9">

    <div style="margin:0px auto;max-width:640px;background:transparent">
      <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent" align="center" border="0">
        <tbody>
          <tr>
            <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 0px">
              <div aria-labelledby="mj-column-per-100" class="m_3751144356682424584mj-column-per-100 m_3751144356682424584outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="word-break:break-word;font-size:0px;padding:0px" align="center">
                        <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px" align="center" border="0">
                          <tbody>
                            <tr>
                              <td style="width:138px"><img alt="" title="" height="" src="https://www.sistemab.org/wp-content/uploads/2021/09/logo-devf-1-Raquel-Laniado.png" width="200" class="CToWUd"></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="max-width:640px;margin:0 auto;border-radius:4px;overflow:hidden">
      <div style="margin:0px auto;max-width:640px;background:#ffffff">
        <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff" align="center" border="0">
          <tbody>
            <tr>
              <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 70px">
                <div aria-labelledby="mj-column-per-100" class="m_3751144356682424584mj-column-per-100 m_3751144356682424584outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td style="word-break:break-word;font-size:0px;padding:0px" align="left">
                          <div style="color:#737f8d;font-family:Whitney,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:16px;line-height:24px;text-align:left">

                            <h2 style="font-family:Whitney,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:500;font-size:20px;color:#4f545c;letter-spacing:0.27px">Hi, ${user.name} ${user.lastName},</h2>
                            <p>Thanks for registering for an account on <span class="il">"Inmubles24/7"</span>! Before we get started, we just need to confirm that this is you. Click below to verify your email address:</p>

                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="word-break:break-word;font-size:0px;padding:10px 25px;padding-top:20px" align="center">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate" align="center" border="0">
                            <tbody>
                              <tr>
                                <td style="border:none;border-radius:3px;color:white;padding:15px 19px" align="center" valign="middle" bgcolor="#7289DA"><a href=${url}/auth/verify/${token} style="text-decoration:none;line-height:100%;background:#7289da;color:white;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:15px;font-weight:normal;text-transform:none;margin:0px">
                                    Verify Email
                                  </a></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
  `;
};

// const user={
//   name:"miguel",
//   lastName:"Calixto"
// }
// const url="hola"

// const token="1234"
// const templateemail=email(user,url,token)
// console.log(templateemail)
export { email };

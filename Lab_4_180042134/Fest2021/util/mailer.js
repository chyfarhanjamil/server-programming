const nodemailer = require("nodemailer");

const mailer = (to, type, key, name) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    let mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: `${type} Registration`,
        text:`${name}, You registration was successful. Your key: ${key} `
    }
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
};

module.exports = mailer
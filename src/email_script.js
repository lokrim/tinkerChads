// In the Google Apps Script code editor

function sendEmail(email, subject, message) {
    var recipient = "sreyaswarrier@gmail.com";
    var recipient1 = "ahmedzyed123@gmail.com";
    var subjectText = subject || "🛑🛑🛑ELEPHANT ALERT! MOVE AWAY FROM / DON'T GO INTO 11.4567,76.5869🛑🛑🛑";
    var bodyText = message || "Default body";
  
    MailApp.sendEmail({
      to: recipient + "," + recipient1,
      subject: subjectText,
      body: bodyText,
    });
  }
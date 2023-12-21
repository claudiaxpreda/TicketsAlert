# TicketsAlert

This project represents a small TyepScript automation that uses TestCafe (end to end testing framework) in order to check target elements to confirm whether football tickets are up for sale. 
This check is performed by accessing the web page every 30 minutes. 
If the tickets are available the check will fail and we will be aware of as a result of receiving a notification email from GitHub Actions. 
This is automated using GitHub Actions and it is a tool that helps when the saler does not affer the option to be notified about the tickets status (such as iabilet.ro or entertix.ro). 
It's a script that can be adjusted depending on one's needs.

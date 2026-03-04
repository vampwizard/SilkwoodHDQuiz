/* ============================================================
   ICT Helpdesk Assessment — quiz.js
   60-question pool · 30 randomly selected per session
   PDF export via jsPDF
   ============================================================ */

'use strict';

// ── QUESTION POOL (60 questions) ──────────────────────────────

const QUESTION_POOL = [

  /* ═══ OFFICE 365 (6) ═══ */
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A user cannot access their Outlook email. What is your first step?",
    opts: ['Reinstall Office', 'Check their licence in the Office 365 Admin Centre', 'Reset their password', 'Restart their computer'],
    ans: 1,
    exp: "Always check the licence first in the O365 Admin Centre — if no licence is assigned the user won't have access to email or Office apps."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "What is the difference between an A3 and A1 licence at this organisation?",
    opts: [
      'A3 is for students, A1 is for staff',
      'A3 is assigned to full-time staff and includes the full Office suite; A1 is for casual staff and has limited features',
      'They are the same licence with different names',
      'A1 includes Teams; A3 does not'
    ],
    ans: 1,
    exp: "Full-time staff receive an A3 licence which includes the full Office suite. Casual staff receive an A1 licence with more limited access."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A staff member wants to share a folder with a colleague. Where should they do this?",
    opts: ['Create a shared drive in Windows Explorer', 'Share it via a Teams channel or Teams folder', 'Email the folder as an attachment', 'Use a USB drive'],
    ans: 1,
    exp: "We use Teams for sharing folders and files — not traditional shared drives. Staff share content through Teams channels or by sharing folders within Teams."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "An advisor asks you to give an on-site student a Teams licence. What do you do?",
    opts: [
      'Add the licence in the O365 Admin Centre straight away',
      'Politely explain that the organisation does not provide Teams licences to on-site students',
      'Create a guest account for the student',
      'Escalate to the principal'
    ],
    ans: 1,
    exp: "Our organisation does not offer Teams licences to on-site students. Politely explain this policy to the advisor."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A user says they cannot find Office apps on their device. How do they install Office?",
    opts: [
      'Download it from a third-party website',
      'Log into Office 365, go to Apps, and click Install Office',
      'Call Microsoft support',
      'Reinstall Windows'
    ],
    ans: 1,
    exp: "Staff can install Office by logging into Office 365 online, navigating to the Apps section, and clicking Install Office. This downloads the full Office suite."
  },
  {
    cat: 'Office 365', diff: 'Medium',
    q: "What is the difference between a Distribution Group and a Microsoft 365 Group?",
    opts: [
      'They are the same thing',
      'A Distribution Group is used to broadcast emails to a list of users; a Microsoft 365 Group is multipurpose — it includes a shared inbox, Teams, and more',
      'A Distribution Group includes SharePoint; a Microsoft 365 Group is email only',
      'Distribution Groups are for students only'
    ],
    ans: 1,
    exp: "A Distribution Group broadcasts emails to a list of users. A Microsoft 365 Group is multipurpose — it comes with a shared inbox, calendar, Teams workspace, and SharePoint."
  },

  /* ═══ SEQTA (6) ═══ */
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "What is SEQTA used for at this organisation?",
    opts: [
      'Network monitoring and device management',
      'Learning Management — including course content, attendance, and pastoral care (behaviour)',
      'Door access and security',
      'Payroll and HR management'
    ],
    ans: 1,
    exp: "SEQTA is our Learning Management System (LMS). It is used for delivering course content, recording attendance, and managing pastoral care including behaviour."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "What is the difference between SEQTA Teach and SEQTA Learn?",
    opts: [
      'SEQTA Teach is for students; SEQTA Learn is for advisors',
      'SEQTA Teach is the advisor-facing portal; SEQTA Learn is the student-facing portal',
      'They are the same portal with different names',
      'SEQTA Learn is for administration staff only'
    ],
    ans: 1,
    exp: "SEQTA Teach is used by advisors to manage courses, attendance, and behaviour. SEQTA Learn is the portal students use to access their courses and content."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "An advisor cannot log into SEQTA. What is your first step?",
    opts: [
      'Create them a new SEQTA account immediately',
      'Go to SEQTA Admin > Users, check their account details are correct, try signing in as the user, and escalate if the issue continues',
      'Contact SEQTA support right away',
      'Reinstall their browser'
    ],
    ans: 1,
    exp: "Check SEQTA Admin > Users first — verify the name, account details, and that the account is active. Try signing in as the user to replicate the issue, then escalate if needed."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "A student says they cannot see their courses in SEQTA Learn. What do you check?",
    opts: [
      'Whether the student has a valid email address',
      'Whether the advisor has added them to the calendar classes in SEQTA',
      'Whether the student has installed SEQTA on their device',
      'Whether the student has a Teams licence'
    ],
    ans: 1,
    exp: "Course visibility in SEQTA Learn depends on the advisor adding the student to the correct calendar classes. If this hasn't been done, no courses will appear."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "An advisor wants to record a behaviour incident for a student. Where do they do this in SEQTA?",
    opts: [
      'In SEQTA Learn under the student profile',
      'In SEQTA Teach under Pastoral Care',
      'In Active Directory under the student account',
      'In the Office 365 Admin Centre'
    ],
    ans: 1,
    exp: "Pastoral care including behaviour incidents is recorded in SEQTA Teach. Advisors navigate to the Pastoral Care section to log and manage student behaviour."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "An advisor says attendance is not updating for their class. What do you check first?",
    opts: [
      'Whether the advisor has the correct browser installed',
      'Whether the class is set up correctly in SEQTA and the advisor is marking attendance in SEQTA Teach',
      'Whether the students have logged into SEQTA Learn',
      'Whether the school network is working'
    ],
    ans: 1,
    exp: "Attendance is recorded by advisors in SEQTA Teach. If it's not updating, check that the class is set up correctly and the advisor is using the right section in SEQTA Teach."
  },

  /* ═══ ACTIVE DIRECTORY (7) ═══ */
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A user is locked out of their Windows account. What do you do?",
    opts: [
      'Tell them to wait 30 minutes',
      'Unlock or reset their password in Active Directory Users and Computers (ADUC)',
      'Reinstall Windows on their device',
      'Create them a new account'
    ],
    ans: 1,
    exp: "Use Active Directory Users and Computers (ADUC) to find the user, right-click, and unlock the account or reset their password."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "How do you create a new user in Active Directory?",
    opts: [
      'In the Office 365 Admin Centre only',
      'In Active Directory Users and Computers (ADUC) — right-click the correct OU and select New > User',
      'By emailing Microsoft',
      'In SEQTA Admin'
    ],
    ans: 1,
    exp: "New user accounts are created in ADUC. Navigate to the correct Organisational Unit, right-click and select New > User, then fill in the required details."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A staff member is leaving. How do you disable their AD account?",
    opts: [
      'Delete it immediately',
      'Find their account in ADUC, right-click, and select Disable Account',
      'Change their password to something random',
      'Remove their Office 365 licence only'
    ],
    ans: 1,
    exp: "Disable the account in AD by right-clicking the user and selecting Disable Account. This prevents login without deleting the account or its data."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What is the proxyAddresses field used for in Active Directory?",
    opts: [
      'Storing the user\'s physical office address',
      'Storing the user\'s email addresses — the primary address is prefixed with SMTP: (uppercase) and secondary addresses with smtp: (lowercase)',
      'Linking the user account to their door access card',
      'Storing the user\'s phone extension number'
    ],
    ans: 1,
    exp: "proxyAddresses stores email addresses for a user. The primary address has SMTP: in uppercase — e.g. SMTP:user@school.edu.au. Secondary or alias addresses use lowercase smtp:."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What are Extension Attributes (extensionAttribute1–5) used for in Active Directory at this organisation?",
    opts: [
      'Storing the user\'s password hints',
      'Storing additional information like email routing or system-specific identifiers used by integrated systems',
      'Storing the user\'s profile photo',
      'Storing the user\'s door access card number'
    ],
    ans: 1,
    exp: "Extension attributes (extensionAttribute1–5) are custom fields in AD used to store extra information about a user — such as identifiers used by integrated systems like email routing."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What does the 'memberOf' attribute on a user account in AD show?",
    opts: [
      'Who manages that user\'s account',
      'Which security and distribution groups the user belongs to — this controls their access to resources and systems',
      'Which computer the user last logged into',
      'Which OU the user account lives in'
    ],
    ans: 1,
    exp: "memberOf lists all the groups a user is a member of. Group membership controls access to shared resources, email distribution lists, and permissions across systems."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "A user has lost access to a resource they had access to before. No one has manually changed their account. What AD attribute would you check?",
    opts: [
      'Their display name',
      'Their memberOf groups — they may have been removed from a security group that granted access',
      'Their office location',
      'Their login time'
    ],
    ans: 1,
    exp: "Access to resources is controlled by security group membership (memberOf). If a user was accidentally removed from a group, they immediately lose access to whatever that group controls."
  },

  /* ═══ INNER RANGE & CARDEXCHANGE (5) ═══ */
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What type of cards does the organisation use for door access?",
    opts: ['Magnetic stripe cards', 'MiFare RFID cards', 'Barcode cards', 'Proximity (125kHz prox) cards'],
    ans: 1,
    exp: "The organisation uses MiFare RFID cards for door access. These are contactless smart cards that communicate wirelessly with door readers."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "Where is the card number for a staff member's door access card stored in Active Directory?",
    opts: [
      'In the proxyAddresses field',
      'In the employeeNumber field — this syncs through to Integriti automatically',
      'In extensionAttribute1',
      'In the user\'s description field'
    ],
    ans: 1,
    exp: "The card digits are stored in the employeeNumber field in Active Directory, which automatically syncs through to the Integriti door access system."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "A staff member's door access card has stopped working. What two things do you check in Integriti?",
    opts: [
      'Whether the reader needs a firmware update and whether the door is locked',
      'Whether the user is in an active permission group and whether \'User Cancelled\' is unticked on their Integriti record',
      'Whether the card printer is online and whether the card is the right colour',
      'Whether their AD account is in the right OU and whether their email is working'
    ],
    ans: 1,
    exp: "In Integriti, check that the user is in an active permission group (which controls which doors they can access) and that 'User Cancelled' is unticked — if it's ticked, the card won't work."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What is CardExchange used for?",
    opts: [
      'Managing door access schedules in Integriti',
      'Printing staff and student ID/access cards',
      'Syncing card numbers from Active Directory',
      'Monitoring which doors have been accessed'
    ],
    ans: 1,
    exp: "CardExchange is the card printing software used to print MiFare ID and access cards for staff and students."
  },
  {
    cat: 'Inner Range', diff: 'Medium',
    q: "A new staff member needs door access set up. What is the correct process?",
    opts: [
      'Add them to a door group in Active Directory and restart Integriti',
      'Ensure their card number is in the employeeNumber field in AD, add them to the correct permission group in Integriti, and make sure User Cancelled is unticked',
      'Print a card in CardExchange and hand it to them — no further setup needed',
      'Contact the security company to provision their access'
    ],
    ans: 1,
    exp: "For door access: the card number must be in employeeNumber in AD (syncs to Integriti), the user must be in an active permission group in Integriti, and User Cancelled must be unticked."
  },

  /* ═══ 3CX (5) ═══ */
  {
    cat: '3CX', diff: 'Easy',
    q: "How is a new staff member's 3CX phone account set up?",
    opts: [
      'They set it up themselves by downloading the app',
      'Their details and extension attribute are added to the 3CX spreadsheet, then the account is created in the 3CX admin console',
      'It is created automatically when their AD account is made',
      'They call the phone provider to request an extension'
    ],
    ans: 1,
    exp: "To set up 3CX for a new user, their details and extension attribute are added to the 3CX spreadsheet, and then the account is manually created in the 3CX admin console."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member has a new phone and needs to install 3CX on it. How do they do this?",
    opts: [
      'Download 3CX from the App Store and enter their credentials manually',
      'Scan the QR code provided from the 3CX admin console to automatically configure the app on their phone',
      'Contact the phone provider to transfer the account',
      'Reinstall 3CX on their old phone first'
    ],
    ans: 1,
    exp: "3CX is installed on a phone by scanning the QR code from the 3CX admin console. This automatically configures the app with the correct server and account settings."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member's 3CX app shows 'Not Registered'. What does this mean?",
    opts: [
      'Their phone plan has been cancelled',
      'The app is not signed in properly — they need to sign in again or re-scan the QR code',
      'Their Office 365 account is locked',
      'The 3CX server is offline'
    ],
    ans: 1,
    exp: "'Not Registered' means the 3CX app is not connected to the server. The most common fix is to sign in again or re-scan the QR code from the 3CX admin console."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member is not receiving calls on 3CX. What do you check first?",
    opts: [
      'Whether their phone is charged',
      'Whether their extension is registered in the 3CX admin console — a green status means registered, red means not',
      'Whether their Office 365 licence is active',
      'Whether the phone line provider is having an outage'
    ],
    ans: 1,
    exp: "Check the extension status in the 3CX admin console. Green = registered and able to receive calls. Red = not registered, meaning the app is not connected."
  },
  {
    cat: '3CX', diff: 'Medium',
    q: "Where is a staff member's 3CX extension number stored in Active Directory?",
    opts: [
      'In the telephoneNumber field',
      'In the extension attribute field in their AD account — this is used when setting up the 3CX account',
      'In the employeeNumber field',
      'In the proxyAddresses field'
    ],
    ans: 1,
    exp: "The 3CX extension attribute is stored in the user's AD extension attribute field. This is referenced when creating the account in the 3CX admin console."
  },

  /* ═══ ASSURE (4) ═══ */
  {
    cat: 'Assure', diff: 'Easy',
    q: "What is Assure used for at this organisation?",
    opts: [
      'Managing staff Office 365 licences',
      'Monitoring student internet activity — including what websites they visit',
      'Managing door access cards',
      'Tracking device locations via GPS'
    ],
    ans: 1,
    exp: "Assure is used to monitor student internet activity. It gives visibility over what websites students are visiting and allows the team to manage web filtering."
  },
  {
    cat: 'Assure', diff: 'Easy',
    q: "A student asks you to unblock a website. What do you do?",
    opts: [
      'Unblock it yourself in Assure immediately',
      'This needs to be escalated — website unblocking requests are not a Level 1 task',
      'Tell the student to use their personal phone instead',
      'Disable the student\'s internet filtering'
    ],
    ans: 1,
    exp: "Website unblocking requests need to be escalated to the appropriate person. This is not a Level 1 task — changes to web filtering require approval and are handled at a higher level."
  },
  {
    cat: 'Assure', diff: 'Easy',
    q: "A teacher reports that students cannot access the internet at all. What do you do?",
    opts: [
      'Restart all the students\' iPads',
      'Check Assure for any network issues — if it appears to be a network problem, escalate it',
      'Tell the teacher to use offline resources for the day',
      'Call the internet provider immediately'
    ],
    ans: 1,
    exp: "Check Assure to see if there is a visible network issue. Network problems need to be escalated — they are beyond Level 1 scope. Document what you see in Assure when escalating."
  },
  {
    cat: 'Assure', diff: 'Medium',
    q: "You can see in Assure that a student has been visiting inappropriate websites. What do you do?",
    opts: [
      'Block the student\'s internet access yourself in Assure',
      'Do not take action yourself — document what you saw and escalate to the relevant staff member',
      'Confiscate the student\'s iPad immediately',
      'Ignore it as it is not an IT issue'
    ],
    ans: 1,
    exp: "Viewing inappropriate content is a pastoral and policy matter. Document exactly what you observed and escalate to the appropriate staff member — do not take action yourself."
  },

  /* ═══ APPLE CLASSROOM (5) ═══ */
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "Which year groups have Apple Classroom set up on their iPads at this organisation?",
    opts: ['Year 7–12', 'Year 2–4', 'All year groups', 'Only Year 12'],
    ans: 1,
    exp: "Apple Classroom is deployed on iPads for students in Year 2 through Year 4 at this organisation."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "What devices do students use at this organisation?",
    opts: ['MacBooks and iPads', 'iPads only', 'Windows laptops only', 'Chromebooks'],
    ans: 1,
    exp: "Students at this organisation use iPads only — there are no student MacBooks."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "A teacher cannot see student iPads in Apple Classroom. What is the most common cause?",
    opts: [
      'The iPads need to be updated',
      'The teacher and students are not on the same Wi-Fi network, or Bluetooth is disabled on one of the devices',
      'Apple Classroom needs to be reinstalled',
      'The students have not logged into SEQTA'
    ],
    ans: 1,
    exp: "Apple Classroom requires the teacher's device and student iPads to be on the same Wi-Fi network with Bluetooth enabled. If either differs, students won't appear."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "Why is AirDrop disabled on student iPads?",
    opts: [
      'It drains the battery too fast',
      'To prevent students from sharing inappropriate content or distracting each other during class',
      'It conflicts with Apple Classroom',
      'AirDrop does not work on school iPads'
    ],
    ans: 1,
    exp: "AirDrop is disabled via MDM to prevent students from sharing distracting or inappropriate content during class time."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "A student cannot install an app on their school iPad. What is the most likely reason?",
    opts: [
      'The App Store is offline',
      'App installations on school iPads are managed by IT through JAMF — students cannot install unapproved apps',
      'The iPad needs a software update',
      'The student does not have an Apple ID'
    ],
    ans: 1,
    exp: "School iPads are managed via JAMF. Apps are approved and pushed by IT — students cannot install apps themselves. If a new app is needed, it must go through IT."
  },

  /* ═══ JAMF (4) ═══ */
  {
    cat: 'JAMF', diff: 'Easy',
    q: "What is JAMF used for at this organisation?",
    opts: [
      'Managing staff Office 365 accounts',
      'Managing and configuring school iPads — including deploying apps, updating device records, and assigning asset information',
      'Monitoring the school network',
      'Managing door access cards'
    ],
    ans: 1,
    exp: "JAMF is the Mobile Device Management (MDM) system used to manage school iPads. IT use it to deploy apps, manage settings, and maintain device asset records."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "A student has been given a different iPad. How do you update the asset record in JAMF?",
    opts: [
      'You cannot change asset records in JAMF',
      'Find the device in JAMF Pro, open the device record, and update the asset tag and assigned user details',
      'Delete the old device record and create a new one',
      'Update the asset tag in Active Directory'
    ],
    ans: 1,
    exp: "In JAMF Pro, find the device record, open it, and update the asset tag and assigned user information. This keeps the device inventory accurate."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "What information should be kept up to date in a device's JAMF record?",
    opts: [
      'The device colour and screen size',
      'The asset tag and the user the device is assigned to',
      'The Wi-Fi password',
      'The student\'s SEQTA login'
    ],
    ans: 1,
    exp: "The asset tag and assigned user should always be kept current in JAMF. This ensures the device can be tracked and the right person contacted if there is an issue."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "A student's iPad is showing as enrolled in JAMF but IT cannot push apps to it. What is the most likely cause?",
    opts: [
      'The iPad battery is too low',
      'The device has not checked in with JAMF recently — it may be offline or the MDM profile may have been removed',
      'The App Store is down',
      'The student\'s AD account is locked'
    ],
    ans: 1,
    exp: "If a device hasn't checked in recently or has lost its MDM profile, policies and apps won't reach it. Check the last check-in time in JAMF and whether the device shows as managed."
  },

  /* ═══ SECURITY (7) ═══ */
  {
    cat: 'Security', diff: 'Easy',
    q: "You are leaving your computer for a few minutes. What should you do first?",
    opts: [
      'Leave it open — you\'ll be right back',
      'Lock your computer using Win + L (Windows) or Control + Command + Q (Mac)',
      'Turn the monitor off',
      'Log out completely'
    ],
    ans: 1,
    exp: "Always lock your computer before stepping away — even for a moment. On Windows press Win + L. On Mac press Control + Command + Q. This prevents anyone from accessing your session."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "What is the keyboard shortcut to lock a Windows computer?",
    opts: ['Ctrl + Alt + Del then wait', 'Win + L', 'Ctrl + L', 'Alt + F4'],
    ans: 1,
    exp: "Win + L instantly locks a Windows computer. Make this a habit every time you step away from your desk."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "A staff member receives an urgent email asking them to click a link and enter their M365 password. What should they do?",
    opts: [
      'Click the link and enter their details — it looks official',
      'Do not click the link — this is a phishing attack. Report it to IT immediately.',
      'Forward it to colleagues to warn them',
      'Reply to the sender asking if it is real'
    ],
    ans: 1,
    exp: "This is a phishing attack — urgency and credential requests are classic signs. Do not click links or enter credentials. Report suspicious emails to IT straight away."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "You find a USB drive left in a common area. What do you do?",
    opts: [
      'Plug it into a PC to see who it belongs to',
      'Hand it to lost property — never plug an unknown USB into a school device',
      'Format it and reuse it',
      'Leave it where you found it'
    ],
    ans: 1,
    exp: "Unknown USB drives can contain malware that runs automatically when plugged in. Never plug an unknown USB into a school device — hand it in to lost property."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "Why should staff use a different password for their school account than their personal accounts?",
    opts: [
      'School policy says passwords must be different lengths',
      'If a personal account is breached, attackers can use the same password to access school systems',
      'Microsoft automatically blocks reused passwords',
      'It makes the school account easier to remember'
    ],
    ans: 1,
    exp: "If a personal account is compromised and the password is the same as the school account, attackers can immediately access school systems. Always use unique passwords."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "What does MFA (Multi-Factor Authentication) do?",
    opts: [
      'It replaces your password with a PIN code',
      'It adds a second step — like a phone notification or code — so a password alone is not enough to log in',
      'It automatically changes your password every month',
      'It blocks access from overseas countries'
    ],
    ans: 1,
    exp: "MFA requires a second verification step beyond just a password. Even if someone steals your password, they still cannot log in without the second factor (e.g. a phone approval)."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "A staff member has clicked a suspicious link in an email. What should happen next?",
    opts: [
      'Nothing — if nothing happened visually, it is probably fine',
      'Report it to IT immediately, disconnect from the network, and do not use the device until IT has checked it',
      'Restart the computer and keep working',
      'Delete the email and hope for the best'
    ],
    ans: 1,
    exp: "Clicking a malicious link can silently install malware or steal credentials. Report it immediately, disconnect from the network to prevent spread, and wait for IT to assess the device."
  },

  /* ═══ HARDWARE (10) ═══ */
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member's laptop screen is cracked. What do you do?",
    opts: [
      'Tell them to keep using it until it stops working',
      'Check if the device is still under warranty — if it is, log a repair with Lenovo',
      'Order a new laptop straight away without checking warranty',
      'Replace the screen yourself'
    ],
    ans: 1,
    exp: "Always check the warranty status first. If the Lenovo ThinkPad is still in warranty, log a repair with Lenovo — repairs under warranty are covered and should always be the first step."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member's laptop will not turn on at all — no lights, no sound. What is your first step?",
    opts: [
      'Send it for repair immediately',
      'Check it is plugged in and charging, then hold the power button for 30 seconds to do a hard reset',
      'Reinstall Windows',
      'Replace the laptop battery'
    ],
    ans: 1,
    exp: "First check the power cable is properly connected and the charger is working. Then do a hard reset by holding the power button for 30 seconds. This resolves many 'no power' faults before escalating."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member says their monitor has no image — it is just a black screen. What do you check first?",
    opts: [
      'Replace the monitor',
      'Check the monitor is turned on, the cable is firmly connected at both ends, and try a different cable or port',
      'Reinstall the graphics driver',
      'Replace the graphics card'
    ],
    ans: 1,
    exp: "A blank monitor is almost always a loose or faulty cable. Check the monitor power, check the display cable at both ends, and try swapping the cable or port before assuming hardware failure."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member spills water on their ThinkPad. What do you tell them to do immediately?",
    opts: [
      'Keep using it and let it dry out while running',
      'Turn it off immediately, flip it upside down to drain, and do not turn it on for at least 24 hours',
      'Use a hairdryer on high heat to dry it quickly',
      'Restart it to see if it still works'
    ],
    ans: 1,
    exp: "Turn it off immediately — water and electricity cause short circuits. Flip it upside down to drain. Do not use heat and do not power it on for at least 24 hours."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A Lenovo ThinkPad shows 'Fan Error' when starting up and then shuts down. What is happening?",
    opts: [
      'The hard drive is failing',
      'The cooling fan is not working — the laptop is shutting down to protect itself from overheating',
      'Windows needs to be reinstalled',
      'The battery needs replacing'
    ],
    ans: 1,
    exp: "'Fan Error' means the cooling fan was not detected spinning. The laptop shuts down to prevent the CPU from overheating and being damaged. Log it with Lenovo if under warranty."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A student's iPad screen is cracked but it still works. What do you do?",
    opts: [
      'Give the student a new iPad immediately',
      'Document the damage, check if it is covered, and follow the repair or replacement process',
      'Use sticky tape to hold it together',
      'Ignore it — if it works it is fine'
    ],
    ans: 1,
    exp: "Document the damage and follow the organisation's process for iPad repairs or replacements. Do not ignore cracked screens — they can worsen and may be a safety hazard."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "An iPad will not charge. What are the first two things to check?",
    opts: [
      'Factory reset the iPad',
      'Check the charging port for lint or debris, and test with a different known-working cable and charger',
      'Update iOS',
      'Replace the iPad immediately'
    ],
    ans: 1,
    exp: "Debris in the Lightning/USB-C port is very common and prevents a proper connection. Always try a different cable and charger before assuming the iPad or port is faulty."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member's keyboard is not typing correctly — some keys are not working. What is a quick first check?",
    opts: [
      'Replace the keyboard immediately',
      'Try an external USB keyboard — if that works, the fault is with the built-in keyboard specifically',
      'Reinstall Windows',
      'Update the keyboard driver'
    ],
    ans: 1,
    exp: "Plugging in an external keyboard tells you immediately whether it is a hardware fault with the built-in keyboard or a software/driver issue affecting all keyboards."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "A staff member's ThinkPad screen is flickering but an external monitor works fine. What does this tell you?",
    opts: [
      'The graphics card is faulty — replace it',
      'The internal screen, display cable, or hinge connection has a fault. Since the external monitor works, the GPU is fine.',
      'Windows needs reinstalling',
      'The USB-C dock is causing the problem'
    ],
    ans: 1,
    exp: "If the external monitor is working, the GPU is fine. The fault is isolated to the internal display — the screen panel, the display cable, or the hinge connector. Log with Lenovo if under warranty."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member says their computer is making a loud clicking sound from inside. What should you do?",
    opts: [
      'Tell them to ignore it',
      'Take it seriously — a clicking sound often means a failing hard drive. Back up their data immediately and escalate.',
      'Tell them to restart it',
      'Update their drivers'
    ],
    ans: 1,
    exp: "A clicking or grinding noise from inside a computer is a warning sign of a failing hard drive. Back up data immediately before the drive fails, then arrange repair or replacement."
  }

];
// ── STATE ─────────────────────────────────────────────────────

const State = {
  staffName:   '',
  sessionQs:   [],   // 30 randomly selected questions
  current:     0,
  answers:     [],   // { cat, correct }
  selectedIdx: null,
  resultsData: null
};

// ── HELPERS ───────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function el(id) { return document.getElementById(id); }

function show(screenId) {
  ['screen-intro', 'screen-quiz', 'screen-results'].forEach(id => {
    const node = el(id);
    if (id === screenId) {
      node.classList.remove('hidden');
      node.style.animation = 'none';
      void node.offsetHeight;
      node.style.animation = '';
    } else {
      node.classList.add('hidden');
    }
  });
}

function diffClass(diff) {
  return { Easy: 'b-green', Medium: 'b-yellow', Hard: 'b-red' }[diff] || 'b-blue';
}

const CATS = [...new Set(QUESTION_POOL.map(q => q.cat))];

// ── INIT ──────────────────────────────────────────────────────

function init() {
  // Populate category tags
  const tagCloud = el('cat-tags');
  CATS.forEach(cat => {
    const span = document.createElement('span');
    span.className = 'badge b-blue';
    span.textContent = cat;
    tagCloud.appendChild(span);
  });

  // Button listeners
  el('btn-start').addEventListener('click', Quiz.start);
  el('btn-next').addEventListener('click', Quiz.next);
  el('btn-finish').addEventListener('click', Quiz.finish);
  el('btn-pdf').addEventListener('click', PDF.export);
  el('btn-restart').addEventListener('click', Quiz.restart);

  el('staff-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') Quiz.start();
  });
}

// ── QUIZ CONTROLLER ───────────────────────────────────────────

const Quiz = {

  start() {
    const name = el('staff-name').value.trim();
    if (!name) {
      el('name-err').classList.remove('hidden');
      return;
    }
    el('name-err').classList.add('hidden');
    State.staffName   = name;
    State.sessionQs   = shuffle(QUESTION_POOL).slice(0, 30);
    State.current     = 0;
    State.answers     = [];
    State.selectedIdx = null;
    Quiz.renderQ();
    show('screen-quiz');
  },

  renderQ() {
    State.selectedIdx = null;
    const q   = State.sessionQs[State.current];
    const pct = (State.current / State.sessionQs.length) * 100;

    el('prog').style.width    = pct + '%';
    el('q-cat').textContent   = q.cat;
    el('q-diff').textContent  = q.diff;
    el('q-diff').className    = 'badge ' + diffClass(q.diff);
    el('q-num').textContent   = `${State.current + 1} / ${State.sessionQs.length}`;
    el('q-text').textContent  = q.q;

    el('btn-next').classList.add('hidden');
    el('btn-finish').classList.add('hidden');

    // Render options
    const optsEl = el('q-opts');
    optsEl.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      btn.addEventListener('click', () => Quiz.select(i, btn));
      optsEl.appendChild(btn);
    });
  },

  select(i, btn) {
    if (State.selectedIdx !== null) return;
    State.selectedIdx = i;

    // Lock all options and mark selection
    document.querySelectorAll('.option').forEach(b => {
      b.classList.add('locked');
    });
    btn.classList.add('selected');

    // Record answer
    State.answers.push({
      cat:     State.sessionQs[State.current].cat,
      chosen:  i,
      correct: i === State.sessionQs[State.current].ans
    });

    const isLast = State.current + 1 >= State.sessionQs.length;
    el(isLast ? 'btn-finish' : 'btn-next').classList.remove('hidden');
  },

  next() {
    State.current++;
    Quiz.renderQ();
  },

  finish() {
    Quiz.buildResults();
    show('screen-results');
  },

  buildResults() {
    const score = State.answers.filter(a => a.correct).length;
    const total = State.sessionQs.length;
    const pct   = Math.round((score / total) * 100);
    const grade =
      pct >= 85 ? { label: 'Excellent',   cls: 'b-green',  emoji: '🏆', col: '#22c55e' } :
      pct >= 70 ? { label: 'Good',        cls: 'b-blue',   emoji: '👍', col: '#60a5fa' } :
      pct >= 50 ? { label: 'Developing',  cls: 'b-yellow', emoji: '📈', col: '#f59e0b' } :
                  { label: 'Needs Work',  cls: 'b-red',    emoji: '🔧', col: '#ef4444' };

    const date = new Date().toLocaleDateString('en-AU', {
      day: '2-digit', month: 'long', year: 'numeric'
    });

    // Category scores
    const catScores = {};
    CATS.forEach(cat => {
      const inSession = State.sessionQs.filter(q => q.cat === cat).length;
      if (inSession === 0) return;
      const correct = State.answers.filter(a => a.cat === cat && a.correct).length;
      catScores[cat] = { correct, total: inSession };
    });

    State.resultsData = { score, total, pct, grade, date, catScores };

    // Render score hero
    el('res-name').textContent   = `${grade.emoji}  ${State.staffName}`;
    el('res-pct').textContent    = pct + '%';
    el('res-pct').style.color    = grade.col;
    el('res-grade').textContent  = grade.label;
    el('res-grade').className    = 'badge badge-lg ' + grade.cls;
    el('res-frac').textContent   = `${score} correct out of ${total} questions`;
    el('res-date').textContent   = date;

    // Render category bars
    const barsEl = el('cat-bars');
    barsEl.innerHTML = '';
    Object.entries(catScores).forEach(([cat, { correct, total: ct }]) => {
      const p   = Math.round((correct / ct) * 100);
      const col = p >= 80 ? '#22c55e' : p >= 60 ? '#f59e0b' : '#ef4444';
      const row = document.createElement('div');
      row.className = 'cat-row';
      row.innerHTML = `
        <div class="cat-meta">
          <span>${cat}</span>
          <span class="cat-val" style="color:${col}">${correct}/${ct} (${p}%)</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width:0%;background:${col}" data-target="${p}"></div>
        </div>`;
      barsEl.appendChild(row);
    });

    // Animate bars after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.bar-fill[data-target]').forEach(bar => {
          bar.style.width = bar.dataset.target + '%';
        });
      });
    });

    // ── Answer Review ──
    let reviewEl = document.getElementById('answer-review');
    if (!reviewEl) {
      reviewEl = document.createElement('div');
      reviewEl.id = 'answer-review';
      const actionsEl = document.querySelector('.results-actions');
      actionsEl.parentNode.insertBefore(reviewEl, actionsEl);
    }
    reviewEl.innerHTML = '<hr class="divider"><div class="section-label">Answer Review</div>';

    State.sessionQs.forEach((q, i) => {
      const ans     = State.answers[i];
      const correct = ans && ans.correct;
      const rightOpt = q.opts[q.ans];
      const chosenOpt = ans ? q.opts[ans.chosen] : '—';

      const item = document.createElement('div');
      item.style.cssText = [
        'border-radius:10px',
        'padding:14px 16px',
        'margin-bottom:10px',
        correct
          ? 'background:rgba(34,197,94,0.05);border:1px solid rgba(34,197,94,0.18)'
          : 'background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.18)'
      ].join(';');

      item.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:8px">' +
          '<span style="font-family:var(--mono);font-size:10px;color:var(--muted)">Q' + (i + 1) + ' · ' + q.cat + '</span>' +
          '<span style="font-family:var(--mono);font-size:12px;font-weight:700;flex-shrink:0;color:' + (correct ? '#22c55e' : '#ef4444') + '">' + (correct ? '✓ Correct' : '✗ Incorrect') + '</span>' +
        '</div>' +
        '<p style="font-size:13px;color:var(--text);margin-bottom:10px;line-height:1.6">' + q.q + '</p>' +
        (!correct
          ? '<div style="font-size:12px;color:#fca5a5;margin-bottom:6px">✗ Your answer: <strong>' + chosenOpt + '</strong></div>'
          : '') +
        '<div style="font-size:12px;color:#86efac">✓ Correct answer: <strong>' + rightOpt + '</strong></div>' +
        '<div style="font-size:11px;color:var(--muted);margin-top:8px;line-height:1.6;border-top:1px solid rgba(255,255,255,0.05);padding-top:8px">💡 ' + q.exp + '</div>';

      reviewEl.appendChild(item);
    });
  },

  restart() {
    el('staff-name').value = '';
    State.staffName = '';
    show('screen-intro');
  }
};

// ── PDF EXPORT ────────────────────────────────────────────────

const PDF = {

  export() {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) { alert('PDF library not loaded. Check your internet connection.'); return; }

    const d    = State.resultsData;
    if (!d) return;

    const doc  = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const W    = 210;
    const MARGIN = 20;
    let y      = 0;

    // ── Helpers ──
    const rgb  = (hex) => {
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      return [r, g, b];
    };

    const gradeColor = {
      'Excellent':  '#22c55e',
      'Good':       '#3b82f6',
      'Developing': '#f59e0b',
      'Needs Work': '#ef4444'
    }[d.grade.label] || '#3b82f6';

    // ── Header bar ──
    doc.setFillColor(7, 11, 18);
    doc.rect(0, 0, W, 52, 'F');

    // Accent line
    doc.setFillColor(...rgb('#2563eb'));
    doc.rect(0, 0, W, 2, 'F');

    // Title
    doc.setTextColor(226, 232, 240);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('ICT Helpdesk', MARGIN, 18);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('Level 1 Knowledge Assessment — Results Report', MARGIN, 26);

    doc.setTextColor(148, 163, 184);
    doc.setFontSize(9);
    doc.text(`Staff Member: ${State.staffName}`, MARGIN, 36);
    doc.text(`Date: ${d.date}`, MARGIN, 42);
    doc.text(`Questions: ${d.total} (randomly selected from 60-question pool)`, MARGIN, 48);

    y = 62;

    // ── Score block ──
    doc.setFillColor(13, 20, 32);
    doc.roundedRect(MARGIN, y, W - MARGIN*2, 38, 4, 4, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(36);
    doc.setTextColor(...rgb(gradeColor));
    doc.text(`${d.pct}%`, MARGIN + 10, y + 24);

    doc.setFontSize(11);
    doc.setTextColor(226, 232, 240);
    doc.text(d.grade.label, MARGIN + 44, y + 16);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`${d.score} correct out of ${d.total} questions`, MARGIN + 44, y + 24);

    const scoreGuide = [
      ['85–100%', 'Excellent'],
      ['70–84%',  'Good'],
      ['50–69%',  'Developing'],
      ['<50%',    'Needs Work']
    ];
    scoreGuide.forEach(([range, label], i) => {
      doc.text(`${range} = ${label}`, MARGIN + 100, y + 10 + i * 7);
    });

    y += 48;

    // ── Category Breakdown ──
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text('CATEGORY BREAKDOWN', MARGIN, y);
    y += 6;

    // Header row
    doc.setFillColor(15, 24, 40);
    doc.rect(MARGIN, y, W - MARGIN*2, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('Category', MARGIN + 3, y + 5.5);
    doc.text('Score', MARGIN + 90, y + 5.5);
    doc.text('Percentage', MARGIN + 115, y + 5.5);
    doc.text('Result', MARGIN + 148, y + 5.5);
    y += 8;

    Object.entries(d.catScores).forEach(([cat, { correct, total: ct }], idx) => {
      const p   = Math.round((correct / ct) * 100);
      const col = p >= 80 ? '#22c55e' : p >= 60 ? '#f59e0b' : '#ef4444';
      const res = p >= 80 ? 'Strong' : p >= 60 ? 'OK' : 'Review';
      const rowH = 10;

      // Alternating row bg
      if (idx % 2 === 0) {
        doc.setFillColor(11, 17, 27);
        doc.rect(MARGIN, y, W - MARGIN*2, rowH, 'F');
      }

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(226, 232, 240);
      doc.text(cat, MARGIN + 3, y + 6.5);
      doc.text(`${correct} / ${ct}`, MARGIN + 90, y + 6.5);
      doc.text(`${p}%`, MARGIN + 115, y + 6.5);

      // Bar
      const barX = MARGIN + 130;
      const barW = 30;
      const barH = 3;
      doc.setFillColor(30, 41, 59);
      doc.roundedRect(barX, y + 4, barW, barH, 1, 1, 'F');
      doc.setFillColor(...rgb(col));
      doc.roundedRect(barX, y + 4, barW * (p / 100), barH, 1, 1, 'F');

      doc.setTextColor(...rgb(col));
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.text(res, MARGIN + 162, y + 6.5);

      y += rowH;
    });

    y += 10;

    // ── Answer Log ──
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text('ANSWER LOG', MARGIN, y);
    y += 6;

    State.answers.forEach((ans, i) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      const q       = State.sessionQs[i];
      const correct = ans.correct;
      const rowH    = 9;

      if (i % 2 === 0) {
        doc.setFillColor(11, 17, 27);
        doc.rect(MARGIN, y, W - MARGIN*2, rowH, 'F');
      }

      // Q number
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(`Q${i + 1}`, MARGIN + 2, y + 6);

      // Question (truncated)
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 195, 210);
      const qText = q.q.length > 72 ? q.q.slice(0, 72) + '…' : q.q;
      doc.text(qText, MARGIN + 12, y + 6, { maxWidth: 128 });

      // Category badge
      doc.setTextColor(96, 165, 250);
      doc.setFontSize(7);
      doc.text(q.cat, MARGIN + 143, y + 6);

      // Correct / Wrong
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(...rgb(correct ? '#22c55e' : '#ef4444'));
      doc.text(correct ? '✓' : '✗', MARGIN + 165, y + 6);

      y += rowH;
    });

    y += 12;

    // ── Footer ──
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(50, 65, 80);
    doc.text(`ICT Helpdesk Level 1 Assessment  ·  Generated ${d.date}  ·  Confidential`, MARGIN, 287);
    doc.setDrawColor(25, 40, 64);
    doc.line(MARGIN, 283, W - MARGIN, 283);

    // ── Save ──
    const filename = `ICT-Assessment_${State.staffName.replace(/\s+/g, '-')}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);
  }
};

// ── BOOT ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', init);

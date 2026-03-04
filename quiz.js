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
    opts: [
      'Reset their password in Active Directory',
      'Check their licence in the Office 365 Admin Centre',
      'Uninstall and reinstall the Office apps on the device',
      'Remove and re-add their email account manually'
    ],
    ans: 1,
    exp: "Always check the licence first in the O365 Admin Centre — if no licence is assigned the user will not have access to email or Office apps."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "What is the difference between an A3 and A1 licence at this organisation?",
    opts: [
      'A3 is for students; A1 is for full-time staff',
      'A3 is for full-time staff with the full Office suite; A1 is for casual staff with limited access',
      'A1 is the premium licence; A3 is the basic one',
      'A3 includes door access; A1 is limited to email only'
    ],
    ans: 1,
    exp: "Full-time staff receive an A3 licence which includes the full Office suite. Casual staff receive an A1 licence with more limited access."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A staff member wants to share files with a colleague. Where should they do this?",
    opts: [
      'Save them to a USB drive and hand it over in person',
      'Share via a Teams channel or Teams folder',
      'Create a shared Windows network drive on their PC',
      'Email the files across as attachments'
    ],
    ans: 1,
    exp: "We use Teams for sharing folders and files — not traditional shared drives. Staff share content through Teams channels or by sharing folders within Teams."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "An advisor asks you to give an on-site student a Teams licence. What do you do?",
    opts: [
      'Add the Teams licence immediately in the O365 Admin Centre',
      'Explain politely that on-site students do not receive Teams licences at this organisation',
      'Set up a guest Teams account for the student instead',
      'Assign them an A1 licence as a workaround'
    ],
    ans: 1,
    exp: "Our organisation does not offer Teams licences to on-site students. Politely explain this policy to the advisor."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A user cannot find Office apps on their device. How do they install them?",
    opts: [
      'Call Microsoft support to request a fresh download link',
      'Log into Office 365, go to Apps, and click Install Office',
      'Download from a third-party site using their work email address',
      'Raise a ticket for IT to push the apps remotely via JAMF'
    ],
    ans: 1,
    exp: "Staff can install Office by logging into Office 365 online, navigating to the Apps section, and clicking Install Office."
  },
  {
    cat: 'Office 365', diff: 'Medium',
    q: "What is the difference between a Distribution Group and a Microsoft 365 Group?",
    opts: [
      'A Distribution Group includes Teams; a Microsoft 365 Group is email only',
      'A Distribution Group broadcasts emails to a list; a Microsoft 365 Group includes a shared inbox, Teams, and more',
      'Distribution Groups are for staff only; Microsoft 365 Groups are for students',
      'A Microsoft 365 Group is older technology; Distribution Groups are the modern replacement'
    ],
    ans: 1,
    exp: "A Distribution Group broadcasts emails to a list. A Microsoft 365 Group is multipurpose — it includes a shared inbox, calendar, Teams workspace, and SharePoint."
  },

  /* ═══ SEQTA (6) ═══ */
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "What is SEQTA used for at this organisation?",
    opts: [
      'Managing staff leave requests and payroll',
      'Learning management — course content, attendance, and pastoral care',
      'Monitoring student internet activity and web filtering',
      'Managing door access cards and staff ID printing'
    ],
    ans: 1,
    exp: "SEQTA is our Learning Management System (LMS). It is used for delivering course content, recording attendance, and managing pastoral care including behaviour."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "What is the difference between SEQTA Teach and SEQTA Learn?",
    opts: [
      'SEQTA Teach is the student portal; SEQTA Learn is the advisor portal',
      'SEQTA Teach is the advisor portal; SEQTA Learn is the student portal',
      'They are the same product — the name just depends on which school uses it',
      'SEQTA Learn includes payroll features that SEQTA Teach does not have'
    ],
    ans: 1,
    exp: "SEQTA Teach is used by advisors to manage courses, attendance, and behaviour. SEQTA Learn is the portal students use to access their courses."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "An advisor cannot log into SEQTA. What is your first step?",
    opts: [
      'Delete the account and create a fresh one from scratch',
      'Go to SEQTA Admin > Users, check their details, try signing in as them, and escalate if needed',
      'Ask the advisor to wait 24 hours and try logging in again',
      'Reset the SEQTA server and have all users retry'
    ],
    ans: 1,
    exp: "Check SEQTA Admin > Users first — verify the account details are correct and the account is active. Try signing in as the user to replicate the issue, then escalate if needed."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "A student cannot see their courses in SEQTA Learn. What do you check?",
    opts: [
      'Whether the student is using the correct web browser',
      'Whether the advisor has added them to the correct calendar classes in SEQTA',
      'Whether the student\'s iPad has the latest iPadOS version installed',
      'Whether the student\'s Office 365 account is active and licensed'
    ],
    ans: 1,
    exp: "Course visibility in SEQTA Learn depends on the advisor adding the student to the correct calendar classes. If this has not been done, no courses will appear."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "Where does an advisor record a student behaviour incident?",
    opts: [
      'In SEQTA Learn under the student\'s personal dashboard',
      'In SEQTA Teach under Pastoral Care',
      'In the Office 365 Admin Centre under the student\'s account',
      'In Active Directory as a note on the student\'s profile'
    ],
    ans: 1,
    exp: "Pastoral care including behaviour incidents is recorded in SEQTA Teach. Advisors navigate to the Pastoral Care section to log and manage behaviour."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "An advisor says attendance is not saving for their class. What do you check first?",
    opts: [
      'Whether all the students have logged into SEQTA Learn that morning',
      'Whether the class is set up correctly and the advisor is marking attendance in SEQTA Teach',
      'Whether the advisor\'s browser needs to be updated to the latest version',
      'Whether the school\'s internet connection is working normally'
    ],
    ans: 1,
    exp: "Attendance is recorded in SEQTA Teach. If it is not saving, check the class is set up correctly and the advisor is using the correct section in SEQTA Teach."
  },

  /* ═══ ACTIVE DIRECTORY (7) ═══ */
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A user is locked out of their Windows account. What do you do?",
    opts: [
      'Ask them to wait an hour for the lockout timer to expire on its own',
      'Unlock or reset their password in Active Directory Users and Computers (ADUC)',
      'Rebuild their Windows user profile on the device',
      'Delete the account and set up a brand new one for them'
    ],
    ans: 1,
    exp: "Use Active Directory Users and Computers (ADUC) to find the user, right-click, and unlock the account or reset their password."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "How do you create a new user account in Active Directory?",
    opts: [
      'In the Office 365 Admin Centre under Users > Add a user',
      'In Active Directory Users and Computers — right-click the correct OU and select New > User',
      'In SEQTA Admin by adding them as a new staff member',
      'By submitting a request to Microsoft through their support portal'
    ],
    ans: 1,
    exp: "New user accounts are created in ADUC. Navigate to the correct OU, right-click and select New > User, then fill in the required details."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A staff member is leaving. How do you disable their AD account?",
    opts: [
      'Change their password to something random and sign them out remotely',
      'Find their account in ADUC, right-click, and select Disable Account',
      'Remove their account from all email groups and wait for it to expire',
      'Move their account to the Recycle Bin folder in ADUC'
    ],
    ans: 1,
    exp: "Disable the account in ADUC by right-clicking the user and selecting Disable Account. This prevents login without deleting the account or its data."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What is the proxyAddresses field used for in Active Directory?",
    opts: [
      'Storing the user\'s physical work location and desk number',
      'Storing email addresses — primary prefixed with SMTP: (uppercase), aliases with smtp: (lowercase)',
      'Storing the user\'s network proxy server and port settings',
      'Linking the user\'s AD account to their Integriti door access record'
    ],
    ans: 1,
    exp: "proxyAddresses stores email addresses. The primary address uses uppercase SMTP: and alias addresses use lowercase smtp:."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What are Extension Attributes (extensionAttribute1–5) used for in AD at this organisation?",
    opts: [
      'Storing the user\'s profile photo and personal display preferences',
      'Storing additional identifiers used by integrated systems like 3CX or email routing',
      'Storing the user\'s password history and account recovery questions',
      'Controlling which Organisational Units a user can browse in ADUC'
    ],
    ans: 1,
    exp: "Extension attributes are custom fields used to store extra information — like identifiers used by integrated systems such as 3CX or email routing."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What does the 'memberOf' attribute on a user account show?",
    opts: [
      'Which administrator last modified or created the user\'s account',
      'Which security and distribution groups the user belongs to, controlling their access to resources',
      'Which computer the user most recently logged into on the domain',
      'Which Organisational Unit the user account is currently stored in'
    ],
    ans: 1,
    exp: "memberOf lists all groups the user belongs to. Group membership controls access to shared resources, email lists, and permissions across systems."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "A user has lost access to something they had before. No one has manually changed their account. What do you check?",
    opts: [
      'Whether their display name has a typo or formatting issue in it',
      'Their memberOf groups — they may have been removed from a relevant security group',
      'Whether their assigned computer has recently been moved to a different desk',
      'Whether their AD password expired in the last 24 hours without them knowing'
    ],
    ans: 1,
    exp: "Access is controlled by security group membership. If a user was removed from a group, they immediately lose access to whatever that group controlled."
  },

  /* ═══ INNER RANGE & CARDEXCHANGE (5) ═══ */
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What type of cards does the organisation use for door access?",
    opts: [
      'Magnetic stripe swipe cards, similar to a hotel room key',
      'MiFare RFID contactless smart cards',
      'Standard printed barcode ID cards scanned at each reader',
      'Proximity 125kHz cards used in older access control systems'
    ],
    ans: 1,
    exp: "The organisation uses MiFare RFID cards for door access. These are contactless smart cards that communicate wirelessly with door readers."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "Where is a staff member\'s door access card number stored in Active Directory?",
    opts: [
      'In extensionAttribute1 under their user account in ADUC',
      'In the employeeNumber field — this syncs automatically through to Integriti',
      'In the proxyAddresses field alongside their email addresses',
      'In the description field as a free-text note added during onboarding'
    ],
    ans: 1,
    exp: "The card digits are stored in the employeeNumber field in AD, which automatically syncs through to the Integriti door access system."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "A staff member\'s access card has stopped working. What two things do you check in Integriti?",
    opts: [
      'Whether the card reader firmware is current and whether the door is fully closed',
      'Whether the user is in an active permission group and whether User Cancelled is unticked',
      'Whether the card was reprinted recently and whether the door schedule is still valid',
      'Whether the reader is online and whether the card colour matches the correct security zone'
    ],
    ans: 1,
    exp: "In Integriti, check the user is in an active permission group and that 'User Cancelled' is unticked — if it is ticked, the card will be denied at all readers."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What is CardExchange used for?",
    opts: [
      'Managing door permission groups and time schedules in Integriti',
      'Printing staff and student ID and access cards',
      'Syncing card numbers from Active Directory into Integriti automatically',
      'Viewing a log of which doors have been accessed and by whom'
    ],
    ans: 1,
    exp: "CardExchange is the card printing software used to design and print MiFare ID and access cards for staff and students."
  },
  {
    cat: 'Inner Range', diff: 'Medium',
    q: "A new staff member needs door access set up. What is the correct process?",
    opts: [
      'Print a card in CardExchange and hand it to them — it works automatically once printed',
      'Add their card number to employeeNumber in AD, add them to the right permission group in Integriti, and untick User Cancelled',
      'Add them to a door security group in Active Directory and restart the Integriti service',
      'Contact the building security company to provision and activate access on your behalf'
    ],
    ans: 1,
    exp: "For door access: put the card number in employeeNumber in AD (it syncs to Integriti), add the user to an active permission group, and ensure User Cancelled is unticked."
  },

  /* ═══ 3CX (5) ═══ */
  {
    cat: '3CX', diff: 'Easy',
    q: "How is a new staff member\'s 3CX phone account created?",
    opts: [
      'It is created automatically when their Office 365 account is provisioned',
      'Their details and extension are added to the 3CX spreadsheet, then the account is created in the 3CX admin console',
      'The staff member downloads 3CX and sets up their own account on first launch',
      'IT submits a request form to the phone provider to allocate a new extension number'
    ],
    ans: 1,
    exp: "To set up 3CX, the staff member\'s details and extension attribute are added to the 3CX spreadsheet, then the account is manually created in the 3CX admin console."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member has a new phone and needs 3CX set up on it. How is this done?",
    opts: [
      'Download 3CX and manually type in the server address and their extension credentials',
      'Scan the QR code from the 3CX admin console to automatically configure the app',
      'Call the phone provider to request the extension be transferred to the new device',
      'Log into the 3CX web portal and select Transfer Account to New Device'
    ],
    ans: 1,
    exp: "3CX is set up on a new phone by scanning the QR code from the 3CX admin console. This automatically configures the app with the correct server and account settings."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member\'s 3CX app says 'Not Registered'. What does this mean?",
    opts: [
      'Their phone plan has been cancelled or suspended by the provider',
      'The app is not signed in properly — they need to sign in again or re-scan the QR code',
      'Their extension number has been deleted from the 3CX admin console',
      'The 3CX server is experiencing a full outage affecting all staff extensions'
    ],
    ans: 1,
    exp: "'Not Registered' means the app is not connected to the server. The most common fix is to sign in again or re-scan the QR code from the 3CX admin console."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member is not receiving calls on their 3CX app. What do you check first?",
    opts: [
      'Whether their phone has enough available storage space to run 3CX properly',
      'Whether their extension shows as registered (green) in the 3CX admin console',
      'Whether their Office 365 licence includes a calling or phone plan feature',
      'Whether the internet provider is experiencing an outage in the local area'
    ],
    ans: 1,
    exp: "Check the extension status in the 3CX admin console. Green = registered and able to receive calls. Red = not registered, meaning the app is not connected."
  },
  {
    cat: '3CX', diff: 'Medium',
    q: "Where is a staff member\'s 3CX extension number stored in Active Directory?",
    opts: [
      'In the telephoneNumber field on their AD user account',
      'In the extension attribute field in AD — used when creating the account in the 3CX admin console',
      'In the employeeNumber field alongside their door access card digits',
      'In the description field as a free-text note added when the account was set up'
    ],
    ans: 1,
    exp: "The 3CX extension attribute is stored in the AD extension attribute field. This is referenced when creating the account in the 3CX admin console."
  },

  /* ═══ ASSURE (4) ═══ */
  {
    cat: 'Assure', diff: 'Easy',
    q: "What is Assure used for at this organisation?",
    opts: [
      'Managing Office 365 licences and staff user account provisioning',
      'Monitoring student internet activity and what websites they visit',
      'Pushing app updates and policy changes to student iPads via MDM',
      'Recording student attendance and logging behaviour incidents'
    ],
    ans: 1,
    exp: "Assure is used to monitor student internet activity. It gives visibility over what websites students are visiting and allows the team to manage web filtering."
  },
  {
    cat: 'Assure', diff: 'Easy',
    q: "A student asks you to unblock a website for them. What do you do?",
    opts: [
      'Unblock it in Assure straight away if the site looks legitimate and educational',
      'Escalate the request — website unblocking is not a Level 1 task and needs proper approval',
      'Tell the student to use their personal phone data to access the site instead',
      'Temporarily disable the student\'s content filtering while they need access'
    ],
    ans: 1,
    exp: "Website unblocking requests need to be escalated. Changes to web filtering require approval and are handled at a higher level — not by Level 1 staff."
  },
  {
    cat: 'Assure', diff: 'Easy',
    q: "A whole class cannot access the internet. What do you do?",
    opts: [
      'Restart all the student iPads in the room one by one and retry',
      'Check Assure for any visible network issues and escalate if it looks like a network problem',
      'Tell the teacher to use offline resources for the rest of the day',
      'Call the internet service provider directly to report a suspected outage'
    ],
    ans: 1,
    exp: "Check Assure for a visible network issue first. Network problems need to be escalated — document what you see in Assure when you raise it."
  },
  {
    cat: 'Assure', diff: 'Medium',
    q: "You can see in Assure that a student has been visiting inappropriate websites. What do you do?",
    opts: [
      'Block the student\'s internet access yourself in Assure straight away',
      'Document exactly what you saw and escalate to the appropriate staff member — do not act yourself',
      'Confiscate the student\'s iPad on the spot and take it straight to the principal',
      'Monitor the situation for a few more days before raising it with anyone'
    ],
    ans: 1,
    exp: "This is a pastoral and policy matter. Document what you observed and escalate to the appropriate staff member — do not make changes in Assure yourself."
  },

  /* ═══ APPLE CLASSROOM (5) ═══ */
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "Which year groups have Apple Classroom set up on their iPads?",
    opts: [
      'All year groups from Year 1 through to Year 12',
      'Year 2 through Year 4 only',
      'Year 7 through Year 10 only',
      'Year 11 and Year 12 students only'
    ],
    ans: 1,
    exp: "Apple Classroom is deployed on iPads for students in Year 2 through Year 4 at this organisation."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "What devices do students use at this organisation?",
    opts: [
      'MacBooks for senior students and iPads for junior students',
      'iPads only — there are no student MacBooks',
      'Windows laptops for most students with iPads used in the junior years',
      'Chromebooks for all students with shared iPads available for class use'
    ],
    ans: 1,
    exp: "Students at this organisation use iPads only — there are no student MacBooks in use."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "A teacher cannot see student iPads in Apple Classroom. What is the most common cause?",
    opts: [
      'The student iPads all need to be updated to the latest version of iPadOS',
      'The teacher\'s device and student iPads are not on the same Wi-Fi network, or Bluetooth is off on one of the devices',
      'Apple Classroom needs to be deleted and reinstalled on the teacher\'s device',
      'The students have not logged into SEQTA Learn yet that morning'
    ],
    ans: 1,
    exp: "Apple Classroom requires all devices to be on the same Wi-Fi network with Bluetooth enabled. If either condition is not met, students will not appear."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "Why is AirDrop disabled on student iPads?",
    opts: [
      'AirDrop significantly drains the battery compared to normal use',
      'To stop students sharing inappropriate content or distracting each other in class',
      'AirDrop causes crashes when Apple Classroom is also running on the device',
      'The model of iPads the school uses does not support AirDrop at all'
    ],
    ans: 1,
    exp: "AirDrop is disabled via MDM to prevent students from sharing distracting or inappropriate content during class time."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "A student cannot install an app on their school iPad. What is the most likely reason?",
    opts: [
      'The App Store servers are currently offline for scheduled maintenance',
      'App installations are managed by IT through JAMF — students cannot install unapproved apps themselves',
      'The iPad needs to be updated to the latest iPadOS before any new apps can be installed',
      'The student\'s Apple ID account has not been verified with a phone number yet'
    ],
    ans: 1,
    exp: "School iPads are managed via JAMF. Apps are approved and pushed by IT — students cannot install apps themselves without IT involvement."
  },

  /* ═══ JAMF (4) ═══ */
  {
    cat: 'JAMF', diff: 'Easy',
    q: "What is JAMF used for at this organisation?",
    opts: [
      'Managing staff Office 365 accounts and assigning email licences',
      'Managing school iPads — deploying apps, settings, and keeping device records accurate',
      'Monitoring the school network and filtering student internet access',
      'Managing staff door access cards and Integriti permission groups'
    ],
    ans: 1,
    exp: "JAMF is the MDM platform used to manage school iPads. IT use it to deploy apps, manage settings, and maintain accurate device asset records."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "A student has been assigned a different iPad. How do you update the record in JAMF?",
    opts: [
      'Delete the old device record entirely and create a brand new one from scratch',
      'Find the device in JAMF Pro, open the record, and update the asset tag and assigned user',
      'Update the student\'s name in Active Directory and wait for the change to sync into JAMF',
      'Wipe and re-enrol the iPad from scratch so it automatically picks up the new user'
    ],
    ans: 1,
    exp: "In JAMF Pro, find the device record, open it, and update the asset tag and assigned user. This keeps the inventory accurate without needing to wipe the device."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "What information should always be kept up to date in a device\'s JAMF record?",
    opts: [
      'The device\'s screen size, colour, and available storage capacity',
      'The asset tag and the user the device is currently assigned to',
      'The Wi-Fi network name and password the device is connected to',
      'The student\'s SEQTA login details and current class timetable'
    ],
    ans: 1,
    exp: "The asset tag and assigned user should always be current in JAMF so devices can be tracked and the right person contacted if there is an issue."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "IT cannot push apps to a student\'s iPad even though it shows as enrolled in JAMF. What is most likely wrong?",
    opts: [
      'The student\'s Apple ID password needs to be reset before any new apps can be installed',
      'The device has not checked in with JAMF recently or the MDM profile may have been removed',
      'The App Store is blocked on the device by the current Assure content filter rules',
      'The student\'s AD account has been disabled, which cuts off MDM communication'
    ],
    ans: 1,
    exp: "If a device has not checked in recently or has lost its MDM profile, policies and apps will not reach it. Check the last check-in time and whether the device still shows as managed."
  },

  /* ═══ SECURITY (7) ═══ */
  {
    cat: 'Security', diff: 'Easy',
    q: "You are stepping away from your computer for a few minutes. What should you do first?",
    opts: [
      'Leave it open — you will only be gone for a moment so it does not matter',
      'Lock your screen with Win + L (Windows) or Control + Command + Q (Mac)',
      'Turn the monitor off so nobody walking past can see what is on screen',
      'Close all your open windows and browser tabs before walking away'
    ],
    ans: 1,
    exp: "Always lock your screen before stepping away — even briefly. Win + L on Windows, Control + Command + Q on Mac. This prevents anyone from accessing your session."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "What is the keyboard shortcut to lock a Windows computer?",
    opts: [
      'Ctrl + Alt + Delete, then click the Lock option from the menu',
      'Win + L',
      'Ctrl + Shift + L',
      'Alt + F4 and then confirm the prompt that appears'
    ],
    ans: 1,
    exp: "Win + L instantly locks a Windows computer. Make this a habit every time you step away from your desk."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "A staff member receives an urgent email asking them to click a link and enter their M365 password. What should they do?",
    opts: [
      'Click the link and complete the steps — urgent IT emails should always be followed promptly',
      'Do not click the link — this is a phishing attack. Report it to IT immediately.',
      'Forward the email to their colleagues so the whole team is aware of the urgent request',
      'Reply to the sender and ask them to confirm it is legitimate before taking any action'
    ],
    ans: 1,
    exp: "This is phishing — urgency and credential requests are the classic signs. Never click suspicious links. Report to IT straight away."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "You find a USB drive left in a common area. What do you do?",
    opts: [
      'Plug it into a school PC to look at the files and find out who it belongs to',
      'Hand it to lost property and never plug an unknown USB into a school device',
      'Format it and add it to the IT spares drawer for future use',
      'Leave it exactly where it is in case the owner comes back to collect it'
    ],
    ans: 1,
    exp: "Unknown USB drives can contain malware that runs automatically when plugged in. Never plug one into a school device — hand it to lost property."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "Why should staff use a different password for their school account than their personal accounts?",
    opts: [
      'School password policy requires a minimum length that many personal sites do not enforce',
      'If a personal account is breached, attackers can use the same password to access school systems',
      'Microsoft automatically detects and blocks passwords that match those used on other websites',
      'Reusing passwords only becomes a problem if the user has more than five accounts total'
    ],
    ans: 1,
    exp: "If a personal account is compromised and the password is the same as the school account, attackers can immediately access school systems. Always use unique passwords."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "What does MFA (Multi-Factor Authentication) do?",
    opts: [
      'It fully replaces your password with a PIN that is sent to your registered phone',
      'It adds a second verification step so a password alone is not enough to log in',
      'It automatically resets your password every 30 days as a security precaution',
      'It blocks any login attempt that originates from outside of Australia'
    ],
    ans: 1,
    exp: "MFA adds a second step — like a phone notification — on top of your password. Even if someone has your password, they still cannot log in without that second factor."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "A staff member has accidentally clicked a link in a suspicious email. What should happen next?",
    opts: [
      'Nothing needs to happen if the page that opened looked normal and nothing visibly downloaded',
      'Report it to IT immediately, disconnect the device from the network, and do not use it until IT clears it',
      'Restart the computer to clear any potential threat, then continue working as normal',
      'Delete the email from the inbox and sent items folder so there is no record of it'
    ],
    ans: 1,
    exp: "Clicking a malicious link can silently install malware. Report to IT immediately, disconnect from the network, and wait for IT to assess the device before using it again."
  },

  /* ═══ HARDWARE (10) ═══ */
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member\'s laptop screen is cracked. What do you do first?",
    opts: [
      'Order a replacement laptop straight away to minimise their downtime',
      'Check if it is still under warranty — if so, log a repair with Lenovo',
      'Replace the screen yourself using a spare panel from the IT cupboard',
      'Tell them to keep using it until the screen stops working completely'
    ],
    ans: 1,
    exp: "Always check warranty first. If the ThinkPad is under warranty, log a repair with Lenovo — warranty repairs are covered and should always be the first step."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member\'s laptop will not turn on — no lights, no sounds at all. What is your first step?",
    opts: [
      'Log it with Lenovo for a repair straight away as it must be a hardware fault',
      'Check it is properly plugged in and charging, then hold the power button for 30 seconds to hard reset',
      'Boot from a USB drive and attempt to reinstall Windows on the device',
      'Replace the internal battery as it has most likely failed completely'
    ],
    ans: 1,
    exp: "Check the power cable is connected and working first, then do a hard reset by holding the power button for 30 seconds. This fixes many no-power faults before escalating."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A monitor has no image — just a black screen. What do you check first?",
    opts: [
      'Replace the monitor straight away using a spare unit from IT storage',
      'Check the monitor is powered on, the cable is secure at both ends, and try a different cable or port',
      'Reinstall the graphics driver from Device Manager inside Windows',
      'Replace the graphics card as it is by far the most common cause of a blank screen'
    ],
    ans: 1,
    exp: "A blank screen is almost always a loose or faulty cable. Check the power, check the display cable at both ends, and try swapping cables or ports before assuming hardware failure."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member spills water on their ThinkPad. What do you tell them to do straight away?",
    opts: [
      'Keep using it and let it dry out on its own while it is still running',
      'Turn it off immediately, flip it upside down to drain, and do not power it on for at least 24 hours',
      'Use a hairdryer on a low heat setting to speed up the drying process safely',
      'Restart it immediately to check whether it is still functioning before it dries out'
    ],
    ans: 1,
    exp: "Turn it off immediately to prevent short circuits. Flip upside down to drain. No heat, and do not power on for at least 24 hours."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A ThinkPad shows 'Fan Error' on startup and shuts itself down. What is happening?",
    opts: [
      'The internal hard drive is failing and needs to be replaced before data is lost',
      'The cooling fan has stopped working — the laptop shuts down to protect itself from overheating',
      'Windows has become corrupted and needs to be completely reinstalled from scratch',
      'The laptop battery has swollen and is triggering an automatic safety shutdown'
    ],
    ans: 1,
    exp: "'Fan Error' means the cooling fan was not detected spinning. The laptop shuts down to protect the CPU. Log with Lenovo if under warranty."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A student\'s iPad screen is cracked but it still works fine. What do you do?",
    opts: [
      'Issue a replacement iPad to the student immediately to avoid any further damage',
      'Document the damage and follow the organisation\'s repair or replacement process',
      'Apply a screen protector over the crack and let the student keep using it',
      'Leave it as is — if it still works it does not need to be reported or actioned'
    ],
    ans: 1,
    exp: "Document the damage and follow the correct process. Cracked screens can worsen and may become a safety hazard — do not ignore them."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "An iPad will not charge. What are the first two things to check?",
    opts: [
      'Restore the iPad via Finder and update it to the latest available iPadOS version',
      'Check the port for lint or debris and test with a different known-working cable and charger',
      'Check the student\'s JAMF record to see if charging has been restricted by an MDM policy',
      'Replace the iPad straight away — charging port faults are generally not repairable'
    ],
    ans: 1,
    exp: "Debris in the charging port is very common. Always test with a different cable and charger before assuming the iPad itself is the problem."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "Some keys on a staff member\'s laptop keyboard are not working. What is a quick first check?",
    opts: [
      'Order a replacement keyboard unit straight away as built-in keyboards are not repairable',
      'Plug in an external USB keyboard — if that works, the fault is with the built-in keyboard itself',
      'Reinstall Windows as keyboard faults are almost always caused by software corruption',
      'Update the keyboard driver in Device Manager and restart the laptop to apply it'
    ],
    ans: 1,
    exp: "Testing with an external keyboard tells you immediately whether it is a hardware fault with the built-in keyboard or a software issue affecting all input."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "A ThinkPad's screen is flickering but an external monitor connected via USB-C works fine. What does this tell you?",
    opts: [
      'The graphics card is faulty and needs replacing — external monitors rely on the same GPU',
      'The fault is with the internal screen, display cable, or hinge — the GPU is fine since the external monitor works',
      'Windows needs a clean reinstall as screen flickering is almost always caused by a software issue',
      'The USB-C dock is interfering with the internal display driver and should be replaced'
    ],
    ans: 1,
    exp: "If the external monitor works, the GPU is fine. The fault is in the internal display path — screen panel, display cable, or hinge. Log with Lenovo if under warranty."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member\'s computer is making a loud clicking noise from inside. What do you do?",
    opts: [
      'Tell them to ignore it — computers often make unusual noises and it is usually nothing serious',
      'Take it seriously — clicking often means a failing hard drive. Back up their data immediately and escalate.',
      'Ask them to restart the computer — the clicking noise usually stops after a clean reboot',
      'Run a driver update as clicking noises are typically caused by outdated or corrupt audio drivers'
    ],
    ans: 1,
    exp: "A clicking or grinding noise is a warning sign of a failing hard drive. Back up data immediately and escalate before the drive fails completely."
  }

];
// ── STATE ─────────────────────────────────────────────────────

const State = {
  staffName:   '',
  sessionQs:   [],
  current:     0,
  answers:     [],
  selectedIdx: null,
  revealed:    false,
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
// Flow: pick answer (can change) → Next → see explanation + result → Next → next question

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
    State.revealed    = false;
    Quiz.renderQ();
    show('screen-quiz');
  },

  renderQ() {
    State.selectedIdx = null;
    State.revealed    = false;

    const q   = State.sessionQs[State.current];
    const pct = (State.current / State.sessionQs.length) * 100;

    el('prog').style.width   = pct + '%';
    el('q-cat').textContent  = q.cat;
    el('q-diff').textContent = q.diff;
    el('q-diff').className   = 'badge ' + diffClass(q.diff);
    el('q-num').textContent  = `${State.current + 1} / ${State.sessionQs.length}`;
    el('q-text').textContent = q.q;

    // Reset nav button
    const btnNext = el('btn-next');
    const btnFin  = el('btn-finish');
    btnNext.textContent = 'Next →';
    btnNext.classList.add('hidden');
    btnFin.classList.add('hidden');

    // Clear old explanation
    const oldExp = el('inline-exp');
    if (oldExp) oldExp.remove();

    // Render answer options
    const optsEl = el('q-opts');
    optsEl.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className    = 'option';
      btn.dataset.idx  = i;
      btn.innerHTML    = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      btn.addEventListener('click', () => Quiz.select(i));
      optsEl.appendChild(btn);
    });
  },

  select(i) {
    // If already revealed, don't allow changing
    if (State.revealed) return;

    State.selectedIdx = i;

    // Highlight selected, clear others
    document.querySelectorAll('.option').forEach(b => {
      b.classList.toggle('selected', parseInt(b.dataset.idx) === i);
    });

    // Show Next button
    el('btn-next').classList.remove('hidden');
  },

  next() {
    // ── STEP 1: answer chosen, not yet revealed → reveal explanation ──
    if (!State.revealed) {
      if (State.selectedIdx === null) return;

      const q       = State.sessionQs[State.current];
      const correct = State.selectedIdx === q.ans;
      State.revealed = true;

      // Record the answer
      State.answers.push({
        cat:     q.cat,
        chosen:  State.selectedIdx,
        correct: correct
      });

      // Lock all options and colour correct/wrong
      document.querySelectorAll('.option').forEach(b => {
        const idx = parseInt(b.dataset.idx);
        b.classList.add('locked');
        if (idx === q.ans)                         b.classList.add('opt-correct');
        if (idx === State.selectedIdx && !correct) b.classList.add('opt-wrong');
      });

      // Show explanation panel
      const expEl = document.createElement('div');
      expEl.id = 'inline-exp';
      expEl.style.cssText = [
        'border-radius:10px',
        'padding:14px 18px',
        'margin-top:14px',
        'font-size:13px',
        'line-height:1.65',
        correct
          ? 'background:rgba(34,197,94,0.07);border:1px solid rgba(34,197,94,0.25);color:#86efac'
          : 'background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.25);color:#fca5a5'
      ].join(';');
      expEl.innerHTML =
        '<div style="font-family:var(--mono);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">' +
        (correct ? '✓ Correct' : '✗ Incorrect — correct answer: ' + q.opts[q.ans]) +
        '</div>' +
        '<span style="color:#cbd5e1">💡 ' + q.exp + '</span>';
      el('q-opts').insertAdjacentElement('afterend', expEl);

      // Update button label
      const isLast = State.current + 1 >= State.sessionQs.length;
      if (isLast) {
        el('btn-next').classList.add('hidden');
        el('btn-finish').classList.remove('hidden');
        el('btn-finish').textContent = 'View Results →';
      } else {
        el('btn-next').textContent = 'Continue →';
      }
      return;
    }

    // ── STEP 2: explanation shown → move to next question ──
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

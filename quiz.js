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
    exp: "Always check the licence first in the O365 Admin Centre — if there is no licence assigned, the user will have no access to email or Office apps."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A user says their OneDrive is not syncing. What are the two things you check?",
    opts: ['Reinstall OneDrive and restart the PC', 'Check OneDrive online and check the local OneDrive sync client on their device', 'Delete their OneDrive account and recreate it', 'Contact Microsoft support'],
    ans: 1,
    exp: "Check the online OneDrive to confirm files are there, then check the local sync client (system tray icon) to see if there are any sync errors on the device."
  },
  {
    cat: 'Office 365', diff: 'Medium',
    q: "A staff member has left the organisation. What is the correct action for their account?",
    opts: ['Delete the account immediately', 'Lock the account in Active Directory or block sign-in in the O365 Admin Centre', 'Change the password and give it to their manager', 'Leave the account as-is'],
    ans: 1,
    exp: "Lock or block sign-in as soon as a staff member leaves to prevent unauthorised access. Do this in AD or the O365 Admin Centre."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "An on-site student's advisor asks you to add a Teams licence for that student. What do you do?",
    opts: ['Add the Teams licence in the O365 Admin Centre', 'Explain politely that the organisation does not offer Teams licences to on-site students', 'Create a guest account for the student', 'Escalate to your manager immediately'],
    ans: 1,
    exp: "Our organisation does not provide Teams licences to on-site students. Politely explain this policy to the advisor."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A user says they cannot find Office on their device. How do you get them to install it?",
    opts: ['Post them a USB drive with Office on it', 'Direct them to Office 365 > Apps > Install Office', 'Reinstall Windows', 'Download Office from a third-party website'],
    ans: 1,
    exp: "Staff can install Office apps themselves by logging into Office 365, going to the Apps section, and clicking Install Office."
  },
  {
    cat: 'Office 365', diff: 'Medium',
    q: "What is the difference between a Distribution Group and a Microsoft 365 Group?",
    opts: [
      'They are the same thing',
      'A Distribution Group broadcasts emails to a list of users; a Microsoft 365 Group is a multipurpose group with shared inbox, calendar, and Teams',
      'A Distribution Group includes SharePoint; a Microsoft 365 Group is email only',
      'Distribution Groups are for students; Microsoft 365 Groups are for staff'
    ],
    ans: 1,
    exp: "Distribution Groups are used for broadcasting emails to a list. Microsoft 365 Groups are multipurpose — they include a shared inbox, calendar, Teams workspace, and SharePoint."
  },

  /* ═══ SEQTA (5) ═══ */
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "A teacher cannot log into SEQTA. What is your first step?",
    opts: ['Create them a new SEQTA account', 'Go to SEQTA Admin > Users, check their account details are correct, try signing in as the user, and escalate if the issue persists', 'Contact SEQTA support immediately', 'Reinstall their browser'],
    ans: 1,
    exp: "Check SEQTA Admin > Users first — verify the name, account, and details are correct. Try signing in as the user to replicate the issue, then escalate if needed."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "What is SEQTA used as at this organisation?",
    opts: ['A payroll system', 'A Learning Management System (LMS)', 'A network monitoring tool', 'A door access system'],
    ans: 1,
    exp: "SEQTA is the organisation's Learning Management System — used for curriculum delivery, timetables, assessments, and communication between advisors and students."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "A student says they cannot see their courses in SEQTA Learn. What do you check?",
    opts: ['Whether the student has a valid email address', 'Whether the advisor has added them to the calendar classes in SEQTA', 'Whether the student has installed SEQTA', 'Whether the student has a Teams licence'],
    ans: 1,
    exp: "Course visibility in SEQTA Learn depends on the advisor adding the student to the correct calendar classes. If that hasn't been done, no courses will appear."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "What is the difference between SEQTA Teach and SEQTA Learn?",
    opts: [
      'SEQTA Teach is for students; SEQTA Learn is for advisors',
      'SEQTA Teach is the advisor-facing portal; SEQTA Learn is the student-facing portal',
      'They are the same portal with different names',
      'SEQTA Learn is for administration only'
    ],
    ans: 1,
    exp: "SEQTA Teach is used by advisors to manage curriculum, assessments, and class content. SEQTA Learn is the portal students use to access their courses and resources."
  },
  {
    cat: 'SEQTA', diff: 'Medium',
    q: "A teacher reports that marks they entered in SEQTA are not saving. What is the first thing you check?",
    opts: ['Reinstall SEQTA on their device', 'Check if the issue occurs in another browser and whether their session has timed out — ask them to log out and back in', 'Delete their SEQTA account and recreate it', 'Contact the principal'],
    ans: 1,
    exp: "Session timeouts and browser issues are the most common causes of data not saving in SEQTA. Try a different browser and ensure the user is properly logged in before escalating."
  },

  /* ═══ ACTIVE DIRECTORY (6) ═══ */
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A user is locked out of their account. What do you do?",
    opts: ['Tell them to wait 30 minutes', 'Unlock their account in Active Directory Users and Computers (ADUC)', 'Reinstall Windows on their device', 'Create them a new account'],
    ans: 1,
    exp: "Use Active Directory Users and Computers (ADUC) to find the user account, right-click, and unlock it. You can also reset their password here if needed."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A staff member has forgotten their Windows login password. What do you do?",
    opts: ['Tell them to guess', 'Reset their password in Active Directory Users and Computers (ADUC)', 'Reinstall Windows', 'Contact Microsoft'],
    ans: 1,
    exp: "Password resets for domain accounts are done in ADUC. Find the user, right-click > Reset Password, set a temporary password, and tick 'User must change password at next logon'."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "A user can log in but suddenly cannot access a shared drive they had access to yesterday. What is the most likely cause?",
    opts: ['Their password is about to expire', 'They have been removed from the security group that grants access to that drive', 'The file server needs a reboot', 'Their account is disabled'],
    ans: 1,
    exp: "Access to shared drives is controlled by security group membership. If a user was accidentally removed from the relevant group, they immediately lose access."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "Where do you go in Active Directory to create a new user account?",
    opts: ['Group Policy Management Console', 'Active Directory Users and Computers (ADUC)', 'DNS Manager', 'Event Viewer'],
    ans: 1,
    exp: "Active Directory Users and Computers (ADUC) is where you create, edit, disable, and manage user and computer accounts."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "A new staff member needs access to a shared folder. What is the correct way to grant access?",
    opts: ['Give them the folder owner\'s password', 'Add them to the security group in AD that has permission to access that folder', 'Email them a link to the folder', 'Install the folder on their desktop'],
    ans: 1,
    exp: "Access to shared resources is managed via security groups in Active Directory. Add the user to the appropriate group and their access is granted at next login."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "A staff member is leaving at the end of the week. What AD steps should be taken on their last day?",
    opts: ['Nothing — their account will auto-delete', 'Disable the account in ADUC and remove them from all security groups', 'Delete the account immediately on their last day', 'Change their password and give it to their manager'],
    ans: 1,
    exp: "Disable the account and remove group memberships on their last day. Deleting immediately is risky as data may be lost — disabling first is safer and allows recovery if needed."
  },

  /* ═══ INNER RANGE / INTEGRITI (5) ═══ */
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "A staff member's door access card has stopped working. What is the first thing you check in Integriti?",
    opts: ['Replace the card immediately', 'Check that the card is enrolled and the user\'s access profile is active and not expired', 'Check if the door controller needs a reboot', 'Contact the security company'],
    ans: 1,
    exp: "In Integriti, check that the card is enrolled and the user's access level is still active. Expired or deactivated access profiles are the most common reason a card stops working."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What type of card does the door access system use?",
    opts: ['Magnetic stripe card', 'MiFare RFID card', 'Barcode card', 'Smart chip card'],
    ans: 1,
    exp: "The organisation uses MiFare RFID cards for door access. These communicate wirelessly with readers at 13.56 MHz."
  },
  {
    cat: 'Inner Range', diff: 'Medium',
    q: "A new staff member needs door access. Where do you set this up?",
    opts: ['In Active Directory', 'In the Integriti management software — create a cardholder, assign a card, and set the correct access level', 'In Office 365 Admin', 'On the physical door reader itself'],
    ans: 1,
    exp: "Door access is managed entirely in the Integriti software. You create a cardholder record, assign their MiFare card, and apply the appropriate access level for the doors they need."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What is an access level in Integriti?",
    opts: [
      'How many times a card has been used',
      'A setting that defines which doors a person can access and at what times',
      'The security clearance level printed on the card',
      'The distance a card can be read from'
    ],
    ans: 1,
    exp: "An access level in Integriti defines which doors a cardholder can open and during which time schedules — for example, staff may access offices 7am–6pm Monday to Friday."
  },
  {
    cat: 'Inner Range', diff: 'Medium',
    q: "An Integriti door is showing a 'Door Forced' alarm. What does this mean?",
    opts: [
      'The door needs a firmware update',
      'The door was opened without a valid card swipe — it may have been forced open or the door sensor may be faulty',
      'The card reader has lost power',
      'The access schedule has expired'
    ],
    ans: 1,
    exp: "'Door Forced' means the door opened without an authorised access event. This could mean it was physically forced open, or the door contact sensor is faulty. Investigate both."
  },

  /* ═══ 3CX (4) ═══ */
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member is not receiving calls on their 3CX app. What do you check first?",
    opts: ['Replace their phone', 'Check that their extension is registered in the 3CX Management Console', 'Restart their computer', 'Call the phone provider'],
    ans: 1,
    exp: "If an extension is not registered, it cannot receive calls. The 3CX Management Console shows a green dot when registered and red when not — check this first."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A user's 3CX app says 'Not Registered'. What are the likely causes?",
    opts: ['Their screen brightness is too low', 'Wrong extension credentials, the 3CX server is unreachable, or a firewall is blocking the connection', 'Their Office 365 account is locked', 'Their laptop needs a Windows update'],
    ans: 1,
    exp: "'Not Registered' means the app cannot connect to the 3CX server. Common causes: wrong username/password, network connectivity issues, or firewall blocking SIP/WebRTC ports."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member wants to transfer a call to a colleague. How do they do this in the 3CX app?",
    opts: ['They cannot transfer calls on a softphone', 'Use the Transfer button in the 3CX app to transfer to the colleague\'s extension', 'Ask the caller to call the colleague directly', 'Use Teams to connect the call'],
    ans: 1,
    exp: "The 3CX softphone app has a Transfer button. You can do a blind transfer (send straight to extension) or an attended transfer (speak to the colleague first before connecting)."
  },
  {
    cat: '3CX', diff: 'Medium',
    q: "What is a Ring Group in 3CX?",
    opts: [
      'A group of staff who share a ringtone',
      'A feature that rings multiple extensions at once when a number is called — useful for reception or support desks',
      'A conference call feature',
      'A voicemail group'
    ],
    ans: 1,
    exp: "A Ring Group sends an incoming call to multiple extensions simultaneously or in sequence. For example, calling reception rings all reception staff at once."
  },

  /* ═══ VIVI (4) ═══ */
  {
    cat: 'Vivi', diff: 'Easy',
    q: "A teacher says the Vivi box is not showing in their Vivi app. What do you check first?",
    opts: ['Replace the Vivi box', 'Make sure the teacher\'s device and the Vivi box are on the same network', 'Restart the projector', 'Reset the teacher\'s AD password'],
    ans: 1,
    exp: "Vivi boxes are discovered over the local network. If the teacher's device and the Vivi box are on different networks or VLANs, the box won't appear in the app."
  },
  {
    cat: 'Vivi', diff: 'Easy',
    q: "A Vivi box is showing a solid red light. What does this usually mean?",
    opts: ['It is in screensaver mode', 'The device has a network or boot error and has not connected properly', 'It is actively being used for casting', 'The HDMI cable is unplugged'],
    ans: 1,
    exp: "A solid red LED on a Vivi box indicates it has failed to boot or connect to the network. Check the power supply, HDMI cable, and network port."
  },
  {
    cat: 'Vivi', diff: 'Easy',
    q: "A teacher cannot cast to a Vivi box even though it is visible in the app. What is the first thing to check?",
    opts: ['Reinstall the Vivi app', 'Check that the teacher is entering the correct 4-digit PIN shown on the Vivi screen', 'Replace the HDMI cable', 'Restart the school network'],
    ans: 1,
    exp: "To cast, the teacher enters the 4-digit PIN displayed on the Vivi box screen. An incorrect PIN or an expired session is the most common reason casting fails."
  },
  {
    cat: 'Vivi', diff: 'Medium',
    q: "A Vivi box says 'Update Required' and will not let users cast. What do you do?",
    opts: ['Replace the Vivi box', 'Make sure the Vivi box has internet access and allow the update to complete', 'Factory reset the Vivi box', 'Ignore it and use a different room'],
    ans: 1,
    exp: "Vivi boxes update automatically when they have internet access. If an update is required, check the box can reach the internet and wait for it to update — this usually resolves the issue."
  },

  /* ═══ ASSURE (4) ═══ */
  {
    cat: 'Assure', diff: 'Easy',
    q: "A user is complaining of slow internet. What do you look for in Assure?",
    opts: ['Whether their laptop has been updated', 'High bandwidth usage, top talkers, or a saturated network interface on their segment', 'Whether they have Teams open', 'The make and model of their laptop'],
    ans: 1,
    exp: "Assure shows real-time network activity. Look for high bandwidth consumption, top talkers, or a switch port running at 100% — these are the most common causes of slow internet."
  },
  {
    cat: 'Assure', diff: 'Easy',
    q: "What is Assure used for at the organisation?",
    opts: ['Managing staff accounts', 'Monitoring network activity and bandwidth usage across the school', 'Managing door access', 'Monitoring student attendance'],
    ans: 1,
    exp: "Assure is a network activity monitor. It gives visibility over bandwidth usage, connected devices, and network performance — useful for diagnosing slow internet or unusual traffic."
  },
  {
    cat: 'Assure', diff: 'Medium',
    q: "Assure shows a device sending a large amount of data off-site at 2am. What should you do?",
    opts: ['Ignore it — backups run at night', 'Flag it as a potential security issue and escalate to your manager or senior IT staff', 'Turn off the device remotely', 'Wait and monitor for another week'],
    ans: 1,
    exp: "Unusual after-hours outbound traffic could indicate malware, a data breach, or unauthorised activity. Flag and escalate immediately — don't wait."
  },
  {
    cat: 'Assure', diff: 'Medium',
    q: "A switch port in Assure is consistently showing 100% utilisation. What does this cause?",
    opts: ['Nothing — this is normal', 'Slow network speeds and packet loss for devices connected through that switch or port', 'The switch will automatically upgrade itself', 'Only wireless devices are affected'],
    ans: 1,
    exp: "A saturated switch port is a bottleneck. Packets get dropped, causing slow network performance for all devices connected through that port or uplink."
  },

  /* ═══ APPLE CLASSROOM (4) ═══ */
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "A teacher cannot see student iPads in Apple Classroom. What is the most common cause?",
    opts: ['The iPads need to be updated', 'The teacher and students are not on the same Wi-Fi network, or Bluetooth is disabled on one of the devices', 'Apple Classroom needs to be reinstalled', 'The iPads do not have passcodes'],
    ans: 1,
    exp: "Apple Classroom relies on the teacher and students being on the same Wi-Fi network with Bluetooth enabled. If either is different, students won't appear."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "Why is AirDrop disabled on student iPads?",
    opts: ['It uses too much battery', 'To prevent students from sharing inappropriate content or distracting each other during class', 'AirDrop does not work on school iPads', 'It conflicts with Apple Classroom'],
    ans: 1,
    exp: "AirDrop allows peer-to-peer file sharing. It is disabled on school iPads via MDM to prevent misuse during class — students could share distracting or inappropriate content."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "What does it mean when a school iPad is 'supervised'?",
    opts: ['A teacher is physically watching the student using the iPad', 'The iPad is enrolled in MDM and can be fully managed and configured by IT', 'The student\'s parents have set restrictions on the iPad', 'The iPad has Find My enabled'],
    ans: 1,
    exp: "A supervised iPad is enrolled in MDM (JAMF) via Apple's Device Enrollment Program. This allows IT to remotely manage, restrict, and configure the device fully."
  },
  {
    cat: 'Apple Classroom', diff: 'Medium',
    q: "A student cannot install an app on their school iPad. What is the most likely reason?",
    opts: ['The App Store is offline', 'The MDM policy has restricted App Store access or the app needs to be approved and pushed by IT', 'The iPad needs a software update', 'The student does not have an Apple ID'],
    ans: 1,
    exp: "School iPads managed via MDM typically have App Store restrictions. Apps are approved and pushed by IT through JAMF. Students cannot install unapproved apps."
  },

  /* ═══ JAMF (6) ═══ */
  {
    cat: 'JAMF', diff: 'Easy',
    q: "A teacher's MacBook has not received a new app that was pushed via JAMF. What do you check first?",
    opts: ['Reimage the MacBook', 'In JAMF Pro, check the device is enrolled, check the last check-in time, and confirm the policy scope includes their device', 'Call Apple Support', 'Ask the teacher to download it from the App Store'],
    ans: 1,
    exp: "The most common reasons a policy doesn't apply: the device isn't in scope, or it hasn't checked in with JAMF recently. Check both in JAMF Pro first."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "What is JAMF used for at the organisation?",
    opts: ['Managing staff leave requests', 'Managing and configuring Apple devices (Macs and iPads) across the school', 'Monitoring the school network', 'Managing door access cards'],
    ans: 1,
    exp: "JAMF Pro is the MDM (Mobile Device Management) platform used to enrol, configure, and manage all school Apple devices including MacBooks and iPads."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "A device in JAMF shows as 'Unmanaged'. What does this mean?",
    opts: ['The device is broken and needs replacing', 'The MDM profile has been removed from the device — it is visible in JAMF inventory but cannot be managed until re-enrolled', 'The device needs a software update', 'The device has been turned off'],
    ans: 1,
    exp: "Unmanaged means the MDM profile has been removed (e.g. user deleted it, or device was wiped). IT can see the device in inventory but cannot push apps or policies until it is re-enrolled."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "What is JAMF Self Service?",
    opts: ['A way for IT to manage devices remotely', 'An app on managed devices that lets staff and students install approved apps and tools themselves without contacting IT', 'Apple\'s built-in device setup tool', 'A JAMF reporting dashboard'],
    ans: 1,
    exp: "JAMF Self Service is an app deployed to managed devices. It lets users install IT-approved apps and run approved maintenance tools themselves, reducing helpdesk tickets."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "A MacBook has been lost. What do you do in JAMF to protect the data on it?",
    opts: ['Nothing — wait for it to be returned', 'Send a Remote Lock command via JAMF Pro to lock the device with a PIN, preventing anyone from accessing it', 'Delete the device from JAMF', 'Change the user\'s AD password'],
    ans: 1,
    exp: "Use JAMF Pro's Remote Lock MDM command to lock the MacBook immediately. This sets a firmware-level PIN, making the device unusable until unlocked by IT."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "A supervised iPad needs to be wiped and reassigned to a new student. What is the correct process?",
    opts: [
      'Go to Settings > General > Reset on the iPad',
      'Use the Wipe command in JAMF Pro — this wipes the device and automatically re-enrols it via DEP with the correct profile for the new user',
      'Remove the MDM profile manually then reset from Settings',
      'Hold the volume and power buttons to factory reset'
    ],
    ans: 1,
    exp: "Always wipe supervised iPads via JAMF Pro. This ensures the device automatically re-enrols through Apple DEP and gets the correct configuration — a manual reset may break DEP enrolment."
  },

  /* ═══ SECURITY (6) ═══ */
  {
    cat: 'Security', diff: 'Easy',
    q: "A staff member receives an email urgently asking them to click a link and enter their M365 password. What type of attack is this and what should they do?",
    opts: ['A ransomware attack — pay the ransom', 'A phishing attack — do not click the link, report it to IT', 'A normal IT request — complete it', 'A DDoS attack — restart their computer'],
    ans: 1,
    exp: "This is phishing — attackers use urgency to trick users into giving away credentials. Staff should never click suspicious links and should report them to IT immediately."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "You find a USB drive left in a common area. What do you do?",
    opts: ['Plug it into a PC to see who it belongs to', 'Hand it to lost property and do not plug it into any school device', 'Format it and reuse it', 'Leave it where it is'],
    ans: 1,
    exp: "Unknown USB drives can contain malware that runs automatically when plugged in. Never plug an unknown USB into a managed school device — hand it in to lost property."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "Why should staff not reuse the same password across multiple accounts?",
    opts: ['It uses more memory', 'If one account is breached, attackers can use that password to access all other accounts that share it', 'Microsoft will automatically lock repeated passwords', 'It makes the password easier to guess'],
    ans: 1,
    exp: "Password reuse is dangerous — if one service is hacked and passwords are leaked, attackers try those same credentials on other services like school email accounts."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "A staff member calls you saying someone else is logged into their computer. What is the first thing you do?",
    opts: ['Tell them to restart the computer', 'Ask them to lock the computer immediately, then change their password and check for any account activity in O365', 'Tell them it is probably a glitch', 'Escalate to management without doing anything'],
    ans: 1,
    exp: "Lock the session immediately to prevent further access, then change the password to kick out any active sessions. Check the O365 sign-in log for unusual activity."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "What does MFA (Multi-Factor Authentication) do?",
    opts: ['It replaces your password with a PIN', 'It adds a second verification step — such as a phone notification or code — so that knowing the password alone is not enough to log in', 'It automatically resets your password every 30 days', 'It prevents staff from accessing personal websites'],
    ans: 1,
    exp: "MFA requires a second factor beyond just a password — usually a notification or code on your phone. Even if an attacker has your password, they cannot log in without the second factor."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "A staff member has accidentally clicked a suspicious link in an email. What should happen next?",
    opts: ['Nothing — if nothing happened visually it is fine', 'Report it to IT immediately, disconnect the device from the network, and do not use it until IT has checked it', 'Restart the computer and carry on', 'Delete the email and hope for the best'],
    ans: 1,
    exp: "Clicking a malicious link can silently install malware. Report it to IT immediately, disconnect from the network to limit spread, and do not use the device until it has been assessed."
  },

  /* ═══ HARDWARE (10) ═══ */
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A Lenovo ThinkPad will not turn on but the charging light is on. What is your first step?",
    opts: ['Send it for repair immediately', 'Hold the power button for 30 seconds to drain residual power, then try turning it on again', 'Reinstall Windows', 'Replace the battery'],
    ans: 1,
    exp: "Holding the power button for 30 seconds performs a hard power reset, draining any residual charge. This fixes many 'won't turn on' issues before any parts need replacing."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A user spills water on their ThinkPad. What do you tell them to do straight away?",
    opts: ['Keep using it and let it dry out', 'Turn it off immediately, flip it upside down to drain, remove the battery if possible, and do not turn it on for at least 24 hours', 'Use a hairdryer to dry it quickly', 'Restart it to check if it still works'],
    ans: 1,
    exp: "Water and electricity are dangerous together. Turning it off immediately prevents short circuits. Flip it upside down to drain and leave it dry for at least 24 hours before attempting to power on."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "A ThinkPad's screen is flickering but an external monitor plugged in via USB-C works fine. What does this tell you?",
    opts: ['The graphics card is faulty', 'The internal screen, display cable, or hinge connection has a fault — the GPU itself is fine', 'Windows needs to be reinstalled', 'The USB-C dock is causing the issue'],
    ans: 1,
    exp: "If the external monitor works fine, the GPU is not the problem. The fault is isolated to the internal display — likely the screen panel, the display cable, or the hinge connection."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A ThinkPad shows 'Fan Error' when starting up and shuts down. What is happening?",
    opts: ['The hard drive is failing', 'The cooling fan is not working — the laptop is shutting down to prevent the CPU from overheating. The fan needs cleaning or replacing.', 'Windows needs reinstalling', 'The BIOS needs an update'],
    ans: 1,
    exp: "'Fan Error' means the laptop detected the cooling fan isn't spinning. It shuts itself down to protect the CPU from heat damage. The fan needs to be cleaned or replaced — do not bypass this warning."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "An iPad will not charge. What are the first two things to check?",
    opts: ['Factory reset the iPad', 'Check the charging port for lint or debris, and test with a different known-working cable and charger', 'Update iOS', 'Replace the iPad'],
    ans: 1,
    exp: "Debris in the port is extremely common and stops the cable making a good connection. Always test with a known-working cable and charger before assuming the iPad is faulty."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "An iPad is stuck in Recovery Mode showing a cable and laptop logo. What do you do?",
    opts: ['Leave it for 24 hours', 'Connect it to a Mac running Finder and try Update first — only use Restore as a last resort as it erases all data', 'Hold all the buttons to force restart', 'Replace the iPad'],
    ans: 1,
    exp: "Always try Update before Restore when an iPad is in Recovery Mode. Update reinstalls iOS without wiping data. Restore is a full erase and should only be used if Update fails."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A teacher says their MacBook is running very slowly. What is the first software check?",
    opts: ['Reinstall macOS', 'Open Activity Monitor and check for any apps or processes using high CPU or memory', 'Wipe the MacBook via JAMF', 'Replace the MacBook'],
    ans: 1,
    exp: "Activity Monitor (macOS equivalent of Task Manager) shows what is using CPU and memory. A runaway process or app is the most common cause of sudden slowness."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member's laptop keyboard has stopped working. What is a quick first check before escalating?",
    opts: ['Replace the laptop', 'Check if an external USB keyboard works — if it does, the fault is with the built-in keyboard specifically', 'Reinstall Windows', 'Update the keyboard driver'],
    ans: 1,
    exp: "Testing with an external keyboard immediately tells you whether it's a hardware fault with the built-in keyboard or a software/driver issue affecting all keyboard input."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "A ThinkPad is connected to a USB-C dock but the external monitors are not displaying. The laptop screen works fine. What do you check first?",
    opts: ['Replace the dock immediately', 'Check the dock is firmly connected, try a different USB-C port, and check the monitor cables are securely connected', 'Reinstall Windows', 'Replace the monitors'],
    ans: 1,
    exp: "Loose connections are the most common cause of dock display issues. Check all cables, reseat the dock, and try a different USB-C port before assuming hardware failure."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A staff member says their computer is making a loud clicking noise. What should you do?",
    opts: ['Tell them to ignore it', 'Take it seriously — a clicking noise from inside a computer often indicates a failing hard drive. Back up their data immediately and escalate.', 'Tell them to restart it', 'Update their drivers'],
    ans: 1,
    exp: "A clicking or grinding noise from inside a computer is a serious warning sign of a failing hard drive. Back up data immediately before the drive fails completely, then arrange a replacement."
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

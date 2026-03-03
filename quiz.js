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
    q: "A user cannot access their Outlook email on a new device. They're signed in but get 'Account not found'. What is the most likely first step?",
    opts: ['Reinstall Office 365', "Verify the user's licence is assigned in Microsoft 365 Admin Centre", 'Reset their password', 'Clear browser cache'],
    ans: 1,
    exp: "No licence = no mailbox. Check licence assignment in the M365 Admin Centre before anything else."
  },
  {
    cat: 'Office 365', diff: 'Medium',
    q: "A teacher's shared OneDrive folder has stopped syncing on their laptop. Which application manages OneDrive sync on Windows?",
    opts: ['SharePoint Desktop App', 'OneDrive Sync Client (OneDrive.exe)', 'Windows Explorer only', 'Teams File Manager'],
    ans: 1,
    exp: "OneDrive.exe is the sync client. Restarting it from the system tray is the first step."
  },
  {
    cat: 'Office 365', diff: 'Hard',
    q: "A staff member has left the organisation. Which action best retains their emails while preventing login?",
    opts: ['Delete the account immediately', 'Convert the mailbox to a Shared Mailbox and block sign-in', 'Change the password and give it to their manager', 'Forward emails to a colleague'],
    ans: 1,
    exp: "Shared Mailbox = no licence cost, email retained. Blocking sign-in secures the account. This is Microsoft best practice."
  },
  {
    cat: 'Office 365', diff: 'Easy',
    q: "A Teams meeting was recorded but the staff member cannot find the recording. Where are Teams meeting recordings stored by default in M365?",
    opts: ['On the local PC in Documents', "In the organiser's OneDrive or the team's SharePoint site", 'On the Teams server only', 'In Exchange mailbox'],
    ans: 1,
    exp: "Since 2021, Teams recordings save to OneDrive (for personal meetings) or SharePoint (for channel meetings) — not the local PC."
  },
  {
    cat: 'Office 365', diff: 'Medium',
    q: "A user says they can't install Office on their new laptop. They have a valid M365 licence. What is the most likely cause?",
    opts: ['Their licence has expired', 'They have reached the 5-device install limit for their licence', 'Office requires Windows 11', 'They need a separate Office licence'],
    ans: 1,
    exp: "M365 licences allow up to 5 devices. If the limit is reached, they must sign out from an old device in the M365 portal before installing on the new one."
  },
  {
    cat: 'Office 365', diff: 'Hard',
    q: "What is the key difference between a Distribution Group and a Microsoft 365 Group in Exchange?",
    opts: [
      'Distribution Groups are for email only; Microsoft 365 Groups include a shared mailbox, calendar, Teams, and SharePoint site',
      'Distribution Groups are newer and more feature-rich',
      'Microsoft 365 Groups can only have external members',
      'There is no functional difference'
    ],
    ans: 0,
    exp: "M365 Groups are a collaboration hub — they spin up a shared inbox, calendar, Teams workspace, and SharePoint. Distribution Groups only route email."
  },

  /* ═══ SEQTA (4) ═══ */
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "A teacher can't log into SEQTA and says it has always worked before. What is your first troubleshooting step?",
    opts: ['Create a new SEQTA account', 'Check if SEQTA loads on another browser or device', 'Rebuild their AD profile', 'Contact SEQTA support immediately'],
    ans: 1,
    exp: "Another browser/device isolates whether the issue is local (browser cache, extension) or a wider server/auth problem."
  },
  {
    cat: 'SEQTA', diff: 'Medium',
    q: "SEQTA is commonly integrated with which authentication system used in schools?",
    opts: ['OAuth 2.0 only', 'Active Directory via LDAP or SSO', 'Local SEQTA accounts only', 'Google Workspace SAML'],
    ans: 1,
    exp: "SEQTA integrates with AD via LDAP or SSO, meaning any AD credential issue directly impacts SEQTA login."
  },
  {
    cat: 'SEQTA', diff: 'Easy',
    q: "A student says they cannot see their timetable in SEQTA Learn. You've confirmed their login works. What do you check next?",
    opts: ['Their device OS version', 'Whether their enrolment and class allocations are correctly set up in the backend', 'Whether their browser is Chrome', 'Whether SEQTA Learn is installed'],
    ans: 1,
    exp: "Timetable visibility in SEQTA Learn depends on correct class/enrolment data. If backend data isn't set up, nothing will display."
  },
  {
    cat: 'SEQTA', diff: 'Medium',
    q: "What is the difference between SEQTA Teach and SEQTA Learn?",
    opts: [
      'SEQTA Teach is for staff to manage curriculum and assessments; SEQTA Learn is the student-facing portal',
      'SEQTA Teach is the student portal; SEQTA Learn is for admin only',
      'They are the same product with different branding',
      'SEQTA Learn is only for primary school students'
    ],
    ans: 0,
    exp: "SEQTA Teach is the staff/teacher interface; SEQTA Learn is the student-facing portal where students see timetables, assessments, and resources."
  },

  /* ═══ ACTIVE DIRECTORY (6) ═══ */
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "A user is locked out after multiple failed logins. Which tool do you use to unlock their account?",
    opts: ['Group Policy Management Console', 'Active Directory Users and Computers (ADUC)', 'DNS Manager', 'Event Viewer'],
    ans: 1,
    exp: "ADUC is the go-to tool for unlocking accounts, resetting passwords, and managing user objects in AD."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "You need to join a new staff laptop to the domain. What is required?",
    opts: ['Same physical network switch as the DC', 'Network connectivity to a Domain Controller and admin credentials with domain-join rights', 'A static IP address', 'A Microsoft support call to authorise the join'],
    ans: 1,
    exp: "Domain join requires: (1) the machine can reach a DC on the network, and (2) credentials with permission to add computer objects."
  },
  {
    cat: 'Active Directory', diff: 'Hard',
    q: "A user can log in but can't access a shared drive they had access to yesterday. No account changes were made. What is the most likely cause?",
    opts: ['Their password expired', 'They were removed from the security group that grants access', 'The file server needs a reboot', 'Their account is in the wrong OU'],
    ans: 1,
    exp: "NTFS share permissions are controlled via security groups. Accidental removal from a group immediately revokes access."
  },
  {
    cat: 'Active Directory', diff: 'Medium',
    q: "What does running 'gpupdate /force' on a Windows machine do?",
    opts: [
      'Restarts the computer immediately',
      'Forces an immediate refresh of Group Policy settings on that machine, overriding the standard polling interval',
      'Updates Windows Defender definitions',
      'Reconnects the machine to the domain'
    ],
    ans: 1,
    exp: "gpupdate /force immediately applies all applicable GPOs, useful after making policy changes that you need to test quickly."
  },
  {
    cat: 'Active Directory', diff: 'Easy',
    q: "What is the purpose of an Organisational Unit (OU) in Active Directory?",
    opts: [
      'To group users for email distribution only',
      'To logically organise AD objects (users, computers, groups) and apply Group Policy to them',
      'To replace security groups',
      'To manage DNS zones'
    ],
    ans: 1,
    exp: "OUs are containers for organising AD objects by department, location, or function, and are the primary target for Group Policy Objects."
  },
  {
    cat: 'Active Directory', diff: 'Hard',
    q: "A user's roaming profile is corrupt and causes login errors. What is the safest first fix?",
    opts: [
      'Delete the profile from the DC immediately',
      "Rename the corrupt profile folder on the profile server (e.g. add .old) so AD creates a fresh profile on next login",
      'Reinstall Windows on the user\'s PC',
      'Reset the user\'s password'
    ],
    ans: 1,
    exp: "Renaming the profile folder to .old is non-destructive — the user gets a fresh profile at next login and the old data can be recovered if needed."
  },

  /* ═══ INNER RANGE / INTEGRITI (5) ═══ */
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "A staff member's door access card stops working. What is the first check in Integriti?",
    opts: ['Check for a firmware update', "Confirm the card is enrolled and the user's access profile is active and not expired", 'Check CCTV is online', 'Replace the door hardware'],
    ans: 1,
    exp: "In Integriti, verify the card is enrolled and the user's access level/schedule is active. Expired profiles or deactivated cards are the most common cause."
  },
  {
    cat: 'Inner Range', diff: 'Medium',
    q: "MiFare cards operate at which RFID frequency?",
    opts: ['125 kHz (Low Frequency)', '13.56 MHz (High Frequency)', '2.4 GHz', '433 MHz (UHF)'],
    ans: 1,
    exp: "MiFare is NFC-based, operating at 13.56 MHz. Older proximity (prox) cards use 125 kHz — they are not compatible."
  },
  {
    cat: 'Inner Range', diff: 'Hard',
    q: "A freshly programmed MiFare card is denied at a reader. What should you verify?",
    opts: ['Card colour matches reader', 'Site code, facility code, and card number match exactly what is enrolled in Integriti', 'The reader needs replacing', "Door schedule is set to 'always locked'"],
    ans: 1,
    exp: "MiFare credentials must match exactly in Integriti. A mismatch in site code, facility code, or card number causes a silent denial with no error message."
  },
  {
    cat: 'Inner Range', diff: 'Easy',
    q: "What is an 'access level' in the Integriti system?",
    opts: [
      'The physical height of the card reader on the wall',
      'A configuration that defines which doors a cardholder can access and during which time schedules',
      'The encryption level of the RFID card',
      'The number of times a card has been swiped'
    ],
    ans: 1,
    exp: "Access levels are the core permission object in Integriti — they group doors and time schedules together and are assigned to cardholders."
  },
  {
    cat: 'Inner Range', diff: 'Medium',
    q: "An Integriti door shows a 'Door Forced' alarm. What does this mean and what do you do?",
    opts: [
      'The door firmware needs updating — run an update',
      "The door was opened without a valid card read or exit request — investigate whether it was forced open or if there's a door sensor fault",
      'The RFID reader has lost power',
      'The door schedule has expired'
    ],
    ans: 1,
    exp: "'Door Forced' means the door contact detected an open state without an authorised event. It may be a genuine forced-open or a faulty door contact sensor — check both."
  },

  /* ═══ 3CX (4) ═══ */
  {
    cat: '3CX', diff: 'Easy',
    q: "A staff member is not receiving calls on their 3CX softphone app. What do you check first?",
    opts: ['Cancel and reorder the phone line', 'Check extension registration status in the 3CX Management Console', 'Check monitor resolution', 'Restart Office 365'],
    ans: 1,
    exp: "An unregistered extension won't receive calls. The 3CX Management Console shows live registration status (green = registered) per extension."
  },
  {
    cat: '3CX', diff: 'Medium',
    q: "A user's 3CX app shows 'Not Registered'. Which of these is NOT a likely cause?",
    opts: ['Incorrect extension credentials', '3CX server unreachable from their network', "Laptop's screen brightness too low", 'Firewall blocking SIP/WebRTC ports'],
    ans: 2,
    exp: "Screen brightness has zero bearing on VoIP registration. Not Registered = credentials problem, network issue, or firewall blocking the required ports."
  },
  {
    cat: '3CX', diff: 'Easy',
    q: "What is a Ring Group in 3CX?",
    opts: [
      'A physical ring tone setting for desk phones',
      'A feature that distributes incoming calls to multiple extensions simultaneously or in sequence',
      'A group chat feature in the 3CX app',
      'A billing group for tracking call costs'
    ],
    ans: 1,
    exp: "Ring Groups allow incoming calls to ring on multiple extensions at once or in order, useful for reception or support team queues."
  },
  {
    cat: '3CX', diff: 'Medium',
    q: "A user wants to transfer a live call to a colleague using the 3CX softphone. What is the correct method?",
    opts: [
      'Put the caller on hold, call the colleague on a separate line, then hang up',
      'Use the Transfer button in the 3CX app — either blind transfer (immediate) or attended transfer (announce first)',
      'Call the colleague and ask them to call the original caller back',
      'Transfer is not possible on softphones — only desk phones support it'
    ],
    ans: 1,
    exp: "3CX softphone supports both blind transfer (straight to extension) and attended transfer (you speak to the recipient before connecting the caller)."
  },

  /* ═══ VIVI (4) ═══ */
  {
    cat: 'Vivi', diff: 'Easy',
    q: "A teacher's Vivi box isn't appearing in their Vivi app. What is the most common cause?",
    opts: ['Classroom lights need replacing', "Teacher's device and Vivi box are on different network VLANs", 'TV resolution needs changing', "Teacher's AD password needs resetting"],
    ans: 1,
    exp: "Vivi uses multicast for discovery. Devices on different VLANs won't see each other unless multicast is routed between them."
  },
  {
    cat: 'Vivi', diff: 'Medium',
    q: "A Vivi box is showing a solid red LED. What does this typically indicate?",
    opts: ['Screensaver mode', 'Network or boot failure — the device has not connected successfully', 'Actively casting a presentation', 'HDMI cable fault only'],
    ans: 1,
    exp: "Solid red on Vivi = boot or network error. Check: power supply, HDMI connection, and whether the network port is active and tagged to the correct VLAN."
  },
  {
    cat: 'Vivi', diff: 'Easy',
    q: "How do you update the firmware on a Vivi box?",
    opts: [
      'You cannot update Vivi firmware manually',
      'Vivi boxes update automatically when connected to the internet; updates can also be pushed from the Vivi management portal',
      'Download firmware from Vivi website and copy to a USB drive',
      'Updates only happen when you factory reset the device'
    ],
    ans: 1,
    exp: "Vivi boxes auto-update via the internet. Updates can also be triggered or scheduled from the Vivi management portal — no manual USB process needed."
  },
  {
    cat: 'Vivi', diff: 'Medium',
    q: "A Vivi box displays 'Update Required' and won't let users cast. What should you do?",
    opts: [
      'Replace the Vivi box immediately',
      'Ensure the Vivi box has internet access and allow it to complete the update; if blocked, check firewall rules for Vivi domains',
      'Factory reset the Vivi box',
      'Disable updates in the Vivi portal'
    ],
    ans: 1,
    exp: "'Update Required' means the Vivi box is blocked from updating. Check it has internet access and that your firewall isn't blocking Vivi's update servers."
  },

  /* ═══ ASSURE (4) ═══ */
  {
    cat: 'Assure', diff: 'Easy',
    q: "A user reports slow internet. Using Assure, what do you look for first?",
    opts: ['Whether the user has run Windows Update', 'Bandwidth consumption, top talkers, and interface utilisation on their network segment', 'Whether Teams is open', 'The laptop model'],
    ans: 1,
    exp: "Assure shows real-time bandwidth, top talkers, and interface utilisation — the key indicators of what's consuming network capacity."
  },
  {
    cat: 'Assure', diff: 'Hard',
    q: "Assure alerts you to a device generating unusually high outbound traffic at 2am. What is the most serious interpretation?",
    opts: ['Someone is working late', 'The device may be compromised — malware, botnet activity, or data exfiltration. Isolate it immediately.', 'Windows Update is running', 'A normal scheduled backup'],
    ans: 1,
    exp: "Anomalous after-hours outbound traffic is a security incident until proven otherwise. Isolate the device, preserve logs, and investigate — don't wait."
  },
  {
    cat: 'Assure', diff: 'Medium',
    q: "What protocol does Assure (and most network monitoring tools) use to collect device statistics like CPU, interface counters, and uptime?",
    opts: ['HTTP', 'SNMP (Simple Network Management Protocol)', 'FTP', 'SSH only'],
    ans: 1,
    exp: "SNMP is the standard protocol for network device monitoring. Assure polls devices via SNMP to collect interface stats, uptime, CPU load, etc."
  },
  {
    cat: 'Assure', diff: 'Easy',
    q: "You notice in Assure that a switch port is showing 100% utilisation consistently. What is the impact of this?",
    opts: ['No impact — 100% is normal for switch ports', 'Packet loss and latency for all devices connected through that port or segment, causing slow network performance', 'The switch will automatically throttle traffic', 'Only affects wireless devices'],
    ans: 1,
    exp: "A fully saturated port or uplink creates a bottleneck — packets queue up and drop, causing latency and connection issues for everyone on that segment."
  },

  /* ═══ APPLE CLASSROOM (4) ═══ */
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "A teacher can't see student iPads in Apple Classroom. What is the most common cause?",
    opts: ['iPads need new cases', 'Teacher and students must be on the same Wi-Fi network with Bluetooth enabled on all devices', 'Apple Classroom needs reinstalling', 'iPads need passcodes set'],
    ans: 1,
    exp: "Apple Classroom uses Bonjour (local network) and Bluetooth for device discovery. Different networks or disabled Bluetooth = students invisible to the teacher."
  },
  {
    cat: 'Apple Classroom', diff: 'Medium',
    q: "A student's iPad is 'supervised'. What does supervised mode enable that unsupervised mode doesn't?",
    opts: [
      'A teacher physically monitors the student at all times',
      'Full MDM control — silent app install/remove, web content filtering, single app mode, VPN configuration, and more',
      'Parental controls set by the student\'s family',
      'Find My is automatically disabled'
    ],
    ans: 1,
    exp: "Supervised devices (via DEP + MDM) unlock the full suite of MDM capabilities. Many restrictions and configurations simply cannot be applied to unsupervised devices."
  },
  {
    cat: 'Apple Classroom', diff: 'Easy',
    q: "What is AirDrop and why might you disable it on school iPads?",
    opts: [
      "Apple's cloud backup service — disabled to save storage",
      "Apple's peer-to-peer file sharing over Wi-Fi and Bluetooth — disabled on school iPads to prevent students sharing inappropriate content or distracting each other",
      'A printer sharing feature — disabled as the school uses network printers',
      'AirDrop is required for Apple Classroom and should not be disabled'
    ],
    ans: 1,
    exp: "AirDrop allows device-to-device file transfer. On school iPads it's typically restricted via MDM to prevent inappropriate sharing during class time."
  },
  {
    cat: 'Apple Classroom', diff: 'Medium',
    q: "A student can't install an app from the App Store on their school iPad. What is the most likely MDM-related cause?",
    opts: [
      'The App Store is down',
      'The MDM profile has disabled App Store access or the app requires explicit approval before installation',
      'The iPad storage is full',
      'The student needs an Apple ID'
    ],
    ans: 1,
    exp: "MDM profiles can restrict App Store access entirely or require IT approval before apps can be installed. Check JAMF for the device's applicable restrictions."
  },

  /* ═══ JAMF (6) ═══ */
  {
    cat: 'JAMF', diff: 'Easy',
    q: "A teacher's MacBook isn't receiving a newly pushed app via JAMF. What is the first check?",
    opts: ['Reimage the MacBook', 'In JAMF Pro, confirm the device is enrolled, check last check-in time, and verify the policy scope includes this device', 'Call Apple Support', 'Download the app manually from the App Store'],
    ans: 1,
    exp: "Scope and last check-in are the first checks. A device outside the policy scope or overdue for check-in won't receive any policies."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "A device in JAMF shows as 'Unmanaged'. What does this mean?",
    opts: ['The device is broken', 'The MDM profile has been removed — the device is in JAMF inventory but no longer managed. Re-enrolment is required.', 'It needs a software update', 'The device is offline'],
    ans: 1,
    exp: "Unmanaged = MDM profile removed (user deleted it, or device was wiped). You can see inventory data but cannot push policies until re-enrolled."
  },
  {
    cat: 'JAMF', diff: 'Hard',
    q: "You need to remotely lock a lost MacBook with a 6-digit PIN. Which JAMF feature handles this?",
    opts: ['Remote Desktop', 'Remote Lock MDM command via the JAMF Pro device record', 'JAMF Connect', 'FileVault Recovery Key'],
    ans: 1,
    exp: "JAMF Pro's Remote Lock command sends an MDM instruction that activates firmware-level lock on a Mac, requiring the PIN you set to unlock it."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "What is the difference between a JAMF Policy and a Configuration Profile?",
    opts: [
      'They are the same thing with different names',
      'Policies run scripts and install software on a trigger; Configuration Profiles enforce ongoing settings like Wi-Fi, restrictions, and certificates',
      'Configuration Profiles are only for iOS; Policies are only for macOS',
      'Policies are permanent; Configuration Profiles are temporary'
    ],
    ans: 1,
    exp: "Policies = task-based (run once, install, script). Config Profiles = state-based (Wi-Fi settings, passcode policy, restrictions) and persist on the device."
  },
  {
    cat: 'JAMF', diff: 'Easy',
    q: "How do you force a managed Mac to check in with JAMF Pro immediately?",
    opts: [
      'You cannot force a check-in — you must wait for the next polling interval',
      'Run "sudo jamf recon" or "sudo jamf policy" in Terminal on the Mac, or send a Remote Management command from JAMF Pro',
      'Restart the Mac',
      'Reinstall the JAMF MDM profile'
    ],
    ans: 1,
    exp: "sudo jamf recon updates inventory, sudo jamf policy triggers policy evaluation immediately. You can also use JAMF Pro's Send Remote Management Command to push a check-in."
  },
  {
    cat: 'JAMF', diff: 'Medium',
    q: "What is JAMF Self Service?",
    opts: [
      'A tool for IT to manage devices without logging in to JAMF Pro',
      'A portal app that appears on managed devices, giving users access to IT-approved apps, tools, and resources they can install themselves',
      "Apple's built-in device management system",
      'A reporting dashboard for device compliance'
    ],
    ans: 1,
    exp: "Self Service is an app deployed to managed devices via JAMF that lets users install approved software, run maintenance scripts, and access IT resources without raising a ticket."
  },

  /* ═══ SECURITY (8) ═══ */
  {
    cat: 'Security', diff: 'Easy',
    q: "A staff member receives an urgent email asking them to click a link and enter their M365 credentials. What type of attack is this?",
    opts: ['Ransomware', 'Phishing', 'DDoS', 'SQL Injection'],
    ans: 1,
    exp: "Urgency + credential harvesting link = classic phishing. Report it, don't click. Check the sender domain carefully."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "A user has reused the same password on their school M365 account and a personal website. Why is this dangerous?",
    opts: ['Uses more PC memory', "If the personal site is breached, attackers use credential stuffing to access the school account", 'Microsoft enforces unique passwords', 'The account will auto-lock'],
    ans: 1,
    exp: "Credential stuffing = taking a leaked username/password pair from one breach and trying it everywhere else. Password reuse is one of the biggest account compromise vectors."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "You find a USB drive in a common area. What do you do?",
    opts: ['Plug it in to identify the owner', "Hand it to lost property — don't plug it into any managed device. Unknown USBs are a known malware delivery vector.", 'Format and reuse it', 'Leave it'],
    ans: 1,
    exp: "'USB baiting' is a real social engineering attack. A malicious USB can auto-execute malware the moment it's inserted. Never plug unknown media into a managed device."
  },
  {
    cat: 'Security', diff: 'Hard',
    q: "MFA is enabled for all M365 accounts. A user is still compromised. Which attack technique most likely bypassed MFA?",
    opts: ['Brute force', 'Adversary-in-the-Middle (AiTM) phishing — a reverse proxy captures the session token after MFA completes', 'Keylogger on a public PC', 'Shoulder surfing'],
    ans: 1,
    exp: "AiTM proxies the real login, lets MFA complete, then steals the authenticated session cookie — bypassing MFA entirely. Phishing-resistant MFA (FIDO2/passkeys) and Conditional Access policies are the mitigation."
  },
  {
    cat: 'Security', diff: 'Medium',
    q: "What is the Principle of Least Privilege?",
    opts: [
      'Giving all staff admin rights to avoid helpdesk calls',
      'Granting users only the minimum permissions required to do their job — nothing more',
      'Using the simplest possible passwords for easy management',
      'Allowing users to install any software to reduce support load'
    ],
    ans: 1,
    exp: "Least Privilege limits the blast radius of a compromised account. An attacker who gets a standard user account shouldn't be able to access everything."
  },
  {
    cat: 'Security', diff: 'Hard',
    q: "You notice sign-ins to a staff member's M365 account from an overseas IP at 3am. The user is asleep. What do you do first?",
    opts: [
      'Email the user and ask if they are travelling',
      'Immediately block sign-in for the account in the M365 Admin Centre, revoke all active sessions, and investigate the activity log',
      'Wait until the user reports a problem',
      'Reset their password via email'
    ],
    ans: 1,
    exp: "This is an active compromise. Block sign-in immediately, revoke sessions (this kills active tokens), then investigate. Waiting allows the attacker to exfiltrate data or set forwarding rules."
  },
  {
    cat: 'Security', diff: 'Easy',
    q: "What is the difference between 2FA (Two-Factor Authentication) and MFA (Multi-Factor Authentication)?",
    opts: [
      '2FA and MFA are different names for completely different systems',
      '2FA is a specific form of MFA that uses exactly two factors; MFA is the broader term for using two or more factors',
      'MFA is less secure than 2FA',
      '2FA is only for email; MFA is for all systems'
    ],
    ans: 1,
    exp: "All 2FA is MFA, but not all MFA is 2FA. MFA = any combination of 2+ factors (something you know, have, or are). 2FA specifically uses two."
  },
  {
    cat: 'Security', diff: 'Hard',
    q: "What is a zero-day vulnerability?",
    opts: [
      'A vulnerability discovered exactly at midnight',
      'A security flaw that is publicly known or actively exploited before the vendor has released a patch',
      'A vulnerability that only affects systems that have been running for zero days',
      'A bug that takes zero seconds to exploit'
    ],
    ans: 1,
    exp: "Zero-day = the vendor has had zero days to fix it. These are the most dangerous vulnerabilities because there's no patch available when exploitation begins."
  },

  /* ═══ HARDWARE (9) ═══ */
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A Lenovo ThinkPad won't power on but shows a charging LED. What is your first step?",
    opts: ['Replace the motherboard', 'Hold the power button for 30 seconds to drain residual power, then attempt boot', 'Order a replacement laptop', 'Reinstall Windows'],
    ans: 1,
    exp: "A 30-second power drain clears residual charge and resets the power circuit — fixes a surprising number of 'won't turn on' faults without any parts."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "A ThinkPad screen flickers but the external monitor via USB-C dock works perfectly. What does this isolate the fault to?",
    opts: ['GPU is faulty', 'Internal display panel, display cable, or lid hinge connection — not the GPU', 'Windows needs reinstalling', "Dock driver issue"],
    ans: 1,
    exp: "If the GPU were faulty, the external monitor would also be affected. Working external output = GPU fine. Fault is in the internal display path: panel, cable, or connector."
  },
  {
    cat: 'Hardware', diff: 'Hard',
    q: "A ThinkPad displays 'Fan Error' on boot and shuts down. What is happening?",
    opts: ['SSD failing — replace it', 'CPU fan not spinning — system halted to prevent thermal damage. Fan needs cleaning or replacing.', 'Reinstall Windows', 'Update BIOS'],
    ans: 1,
    exp: "Fan Error during POST = fan failure detected. The ThinkPad deliberately halts to prevent CPU damage from overheating. Clean or replace the fan — bypassing this will kill the CPU."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "An iPad in Recovery Mode is showing the iTunes/Finder cable logo. What is the correct first step?",
    opts: ['Leave it 24 hours', "Connect to Finder and choose Update first — only Restore if Update fails, as Restore erases all data", 'Hard reset by holding all buttons', 'Replace the iPad'],
    ans: 1,
    exp: "Always try Update before Restore. Update reinstalls iOS without touching user data. Restore is a full wipe — only use it as a last resort."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "What does POST stand for and when does it run?",
    opts: [
      'Power On Self Test — runs each time the computer starts, before the OS loads, to check that hardware is functioning correctly',
      'Pre-Operating System Transfer — runs when installing Windows',
      'Primary Output Signal Test — runs when connecting a monitor',
      'Processor Output Status Test — runs during Windows updates'
    ],
    ans: 0,
    exp: "POST (Power On Self Test) is run by the BIOS/UEFI firmware every boot to verify RAM, CPU, storage, and other hardware. Errors at this stage (like Fan Error) are reported before Windows loads."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "A user spills water on their ThinkPad. What do you tell them to do immediately?",
    opts: [
      'Keep using it and see if it dries out',
      'Power it off immediately, remove the battery if possible, turn it upside down to drain, and do not attempt to power it on for at least 24–48 hours',
      'Use a hairdryer on full heat to dry it quickly',
      'Restart it and run a diagnostic'
    ],
    ans: 1,
    exp: "Water + live electricity = component damage. Power off immediately to prevent short circuits. Turn upside down to drain. Do NOT use heat or power on until fully dry."
  },
  {
    cat: 'Hardware', diff: 'Medium',
    q: "A ThinkPad is getting very hot and throttling performance. What is the first software check before opening it up?",
    opts: [
      'Run Windows Update',
      'Check Task Manager for processes with abnormally high CPU usage, which could be causing sustained thermal load',
      'Reinstall the graphics driver',
      'Check available storage space'
    ],
    ans: 1,
    exp: "Before hardware intervention, check Task Manager for runaway processes. A single process pegging the CPU at 100% will cause sustained heat and thermal throttling."
  },
  {
    cat: 'Hardware', diff: 'Easy',
    q: "An iPad won't charge when connected to its cable and charger. What are the first two things to check?",
    opts: [
      'Replace the iPad immediately',
      'Check the Lightning/USB-C port for debris or lint, and try a different known-working cable and charger to isolate the fault',
      'Factory reset the iPad',
      'Update iOS'
    ],
    ans: 1,
    exp: "Debris in the charging port is extremely common and prevents a good connection. Always rule out cable/charger fault first with known-good replacements before assuming the device is faulty."
  },
  {
    cat: 'Hardware', diff: 'Hard',
    q: "What is the correct way to factory reset a JAMF-managed, supervised iPad that is being reassigned to a new student?",
    opts: [
      'Go to Settings > General > Transfer or Reset iPad on the device',
      "Wipe and re-enrol it through JAMF Pro using the 'Wipe' MDM command, which automatically re-enrols it via DEP and applies the correct configuration profile for the new user",
      "Remove the JAMF profile manually, then reset from Settings",
      "Hold Volume Up + Side button until the Apple logo appears"
    ],
    ans: 1,
    exp: "For DEP-enrolled supervised iPads, always wipe via JAMF Pro — this triggers automatic re-enrolment through Apple's Device Enrollment Program. A manual reset may remove DEP enrolment and require manual re-setup."
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

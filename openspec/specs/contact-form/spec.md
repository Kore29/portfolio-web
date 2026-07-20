# contact-form Capability Spec

## Purpose
Provides an interactive contact form and quick contact tools in the portfolio Contact section.

## Requirements

### Requirement: Interactive Contact Form
The portfolio MUST render an interactive contact form in `sections/Contact.tsx` allowing visitors to input Name, Email, Subject/Reason, and Message.

#### Scenario: Submitting a valid contact message
- **WHEN** a user fills out name, email, subject, and message and clicks "Send Message"
- **THEN** the form invokes the Next.js Server Action to send the message
- **AND** displays a success toast message and resets the inputs.

### Requirement: One-Click Email Copying
The portfolio MUST copy `marticastanorodriguez@gmail.com` to the user's clipboard when clicking the email address.

#### Scenario: Copying email address
- **WHEN** the user clicks the email address
- **THEN** `navigator.clipboard.writeText` copies the email address
- **AND** a toast message appears confirming "Copied to clipboard!".

### Requirement: Availability & Local Time Status
The portfolio MUST display an availability status badge ("Available for opportunities") and live Barcelona time in the contact section.

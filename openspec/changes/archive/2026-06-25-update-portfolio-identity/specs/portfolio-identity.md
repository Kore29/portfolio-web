## ADDED Requirements

### Requirement: Personal Bio and Name
The system SHALL display the name "Martí Castaño" and his professional background in the hero header and About section, replacing the placeholder "Mike Bennet" and brand design bio.

#### Scenario: Displaying real bio on home page
- **WHEN** a user visits the root URL "/"
- **THEN** they see "martí castaño" in the header and Navbar, and a bio about fullstack development, systems, and AI in the About section.

### Requirement: Personal Achievements
The system SHALL list Martí's achievements in the About section or an achievements section, including the courses completed in Summer 2025 and the contests in Barcelona (March 2024) and Madrid (June 2025).

#### Scenario: Displaying achievements list
- **WHEN** a user navigates to the about page "/about"
- **THEN** they see his achievements list including the HP CodeWars contest detail and the prize won in Madrid.

### Requirement: Contact Details and Social Links
The system SHALL render Martí's real contact information (email and social media handles for LinkedIn, GitHub, X) in the footer, replacing all placeholder links and the placeholder email.

#### Scenario: Contact section email link
- **WHEN** a user clicks on the email link in the Contact footer
- **THEN** it opens a mailto composer targeting Martí's actual email address.

### Requirement: Custom Metadata and SEO
The system SHALL specify a professional, descriptive metadata title and description in the root layout to represent Martí Castaño's developer portfolio, replacing the default placeholder description.

#### Scenario: Page title metadata load
- **WHEN** any page loads in the browser
- **THEN** the HTML `<title>` tag contains "Martí Castaño | Fullstack Developer & AI" and the description tag outlines his professional profile.

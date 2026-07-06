## ADDED Requirements

### Requirement: Locale Subpathing Routing
The system SHALL route URLs using locale subpath prefixes (specifically `es` and `en`) and serve the application interface in the corresponding locale.

#### Scenario: Navigating to English About Page
- **WHEN** the user navigates to `/en/about`
- **THEN** the system SHALL render the about page in English and set the HTML element `lang` attribute to `en`

#### Scenario: Navigating to Spanish About Page
- **WHEN** the user navigates to `/es/about`
- **THEN** the system SHALL render the about page in Spanish and set the HTML element `lang` attribute to `es`

### Requirement: Automatic Language Detection
The system SHALL intercept root-level requests and redirect the visitor to their detected preferred language based on HTTP headers or existing cookie preferences.

#### Scenario: Initial Visitor without Cookie Preference
- **WHEN** a user visits `/` with browser language set to Spanish (`es`) and no previous preferences
- **THEN** the system SHALL redirect the user to `/es`

#### Scenario: Initial Visitor with English browser preference
- **WHEN** a user visits `/` with browser language set to English (`en`) and no previous preferences
- **THEN** the system SHALL redirect the user to `/en`

### Requirement: Language Switcher Component
The system SHALL provide a language switching UI component in the navigation bar to toggle the active locale.

#### Scenario: Switching language from English to Spanish
- **WHEN** the user clicks the Spanish language option in the language switcher on `/en/work`
- **THEN** the system SHALL update the route URL to `/es/work` and render the page in Spanish

### Requirement: Translated Page Content
The system SHALL render all user-facing copy, project descriptions, and headings in the language matching the active locale segment.

#### Scenario: Rendering work page in English
- **WHEN** the user is on `/en/work`
- **THEN** the system SHALL render the project categories, titles, descriptions, and tags in English

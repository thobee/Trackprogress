# TrackProgress

TrackProgress is a frontend prototype and product concept for a goal and habit-tracking platform.

It explores how a calm, motivating interface could help people organize goals, build consistent habits, and understand progress over time. The current repository focuses on the visual direction, responsive layout, and landing-page experience.

> **Status:** Frontend prototype — not a completed full-stack tracking application.

[View the live frontend preview](https://trackprogress-ten.vercel.app/)

## What this prototype includes

- Responsive marketing and product landing page
- Hero section introducing the TrackProgress concept
- Feature and product showcase sections
- Pricing presentation
- Testimonials and social-proof sections
- FAQ section
- Calls to action and responsive navigation
- Motion effects and polished visual transitions
- Mobile, tablet, and desktop layouts

## What is not implemented yet

This repository does not currently provide:

- User authentication or account creation
- A production backend or API
- Goal, task, or habit persistence
- Database integration
- Personal dashboards with real user data
- Progress analytics or reporting
- Notifications, reminders, or scheduled tasks
- A complete tracking workflow

The interface communicates the planned product direction, but the product functionality still needs to be designed and implemented.

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Motion
- PostCSS
- Vercel-ready deployment

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install the dependencies:

~~~bash
git clone https://github.com/thobee/Trackprogress.git
cd Trackprogress
npm install
~~~

Start the development server:

~~~bash
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Purpose |
| --- | --- |
| npm run dev | Start the Next.js development server |
| npm run build | Create a production build |
| npm start | Start the production server |
| npm run lint | Run linting checks |

## Project structure

~~~text
src/
├── app/
│   ├── page.tsx       # Main prototype page
│   ├── layout.tsx     # Root layout and metadata
│   └── globals.css    # Global styles
├── components/        # Reusable landing-page sections
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ProductShowcase.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQs.tsx
│   └── ...
└── assets/            # Local visual assets
~~~

## Roadmap

- [x] Establish the initial product and visual direction
- [x] Build the responsive frontend prototype
- [x] Add reusable landing-page sections
- [x] Add motion and interaction patterns
- [ ] Define the goal, habit, and milestone data model
- [ ] Add authentication and user accounts
- [ ] Add a backend and database
- [ ] Build the authenticated tracking dashboard
- [ ] Add progress analytics and reminders
- [ ] Connect the frontend to production services

## Design references

The initial design direction was adapted from the [Dark SaaS Landing Page Starter Template](https://www.figma.com/community/file/1347551304372055519) by Frontend Tribe and Framer's SaaS Website UI Kit, used under the applicable [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Contributing

TrackProgress is an evolving personal project. Suggestions and constructive feedback are welcome as the prototype develops into a complete application.

## Author

[Tobi](https://github.com/thobee)

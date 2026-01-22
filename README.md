🛒 Smolstore

A full-stack e-commerce demo built with Next.js (App Router) and Stripe, showcasing cart management and secure checkout.

✨ Features

Product & price data from Stripe

Global cart state with React Context

Image preview modal using React Portals

Secure Stripe Checkout (server-side)

Success & cancel redirects

🧱 Tech Stack

Next.js (App Router)

React (Hooks & Context API)

Stripe API

Node.js

🔁 Checkout Flow

User adds items to cart

Cart sends { priceId, quantity } to /api/checkout

Server creates Stripe Checkout Session

User is redirected to Stripe-hosted checkout

🚀 Run Locally
npm install
npm run dev


Add environment variables:

NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_SECRET_KEY=your_stripe_secret_key

📌 Notes

Stripe runs in test mode

Payments handled securely on the server
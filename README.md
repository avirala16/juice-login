# Juice Login Demo (OWASP Assignment)

This project is a simple login form built with HTML, JavaScript, and an Express backend. It demonstrates client-side validation, server-side validation, and a reflected XSS vulnerability.

## Setup Instructions

1. Clone the repository:
git clone https://github.com/avirala16/juice-login.git
cd juice-login

2. Install dependencies:
npm install

3. Run the server:
node server.js

4. Open in browser:
http://localhost:3000

## Features
- Client-side validation using JavaScript
- Server-side validation using Express
- Demonstrates reflected XSS vulnerability

## Example XSS Payload
Enter this in the email field:
<script>alert('XSS')</script>@test.com

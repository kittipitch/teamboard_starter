# TeamBoard — Team Feedback Board

## What This Is
A web API where teams post feedback cards (What went well? What to improve? Action items?),
vote on them, and filter by category. Think retrospective/retro board.

## Tech Stack
- Runtime: Node.js 18+
- Framework: Express.js
- Database: In-memory array (no DB setup required)
- No frontend framework — API-only (test with curl)

## Project Conventions
- All routes go in server.js (single file for simplicity)
- Use `let cards = []` as in-memory store
- Card shape: `{ id, text, category, author, votes, createdAt }`
- Categories: `"went-well"`, `"to-improve"`, `"action-item"`
- IDs: auto-increment integer starting at 1
- Return JSON for all endpoints
- Port: 3000

## Commands
- Start server: `node server.js`
- Install deps: `npm install`
- Test: `curl http://localhost:3000/health`

## Security Rules (to be added in S4)
- All user input must be validated and sanitized
- No secrets in code — use .env
- Error responses must not leak stack traces

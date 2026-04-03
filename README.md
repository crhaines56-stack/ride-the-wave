# 🌊 Ride the Wave AI

**A free monthly AI meetup for northwest Austin — Steiner Ranch, Lakeway, River Place & Four Points.**

> *"To ensure our community rides the AI wave and is not crushed by it."*

---

## What This Is

A Next.js 14 single-page landing site for the Ride the Wave AI community meetup. Built with Tailwind CSS and Framer Motion for a polished, mobile-first, dark-mode experience.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email capture:** Formspree
- **Deployment:** Vercel

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

---

## Project Structure

```
ride-the-wave/
├── app/
│   ├── layout.tsx       # Root layout with metadata and fonts
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── HeroSection.tsx      # Full-screen hero with wave animation
│   ├── WaveAnimation.tsx    # Animated SVG wave background
│   ├── Logo.tsx             # Wordmark + wave icon logo
│   ├── MissionSection.tsx   # Mission quote + 3 value prop cards
│   ├── AgendaSection.tsx    # 90-min meeting format timeline
│   ├── WhoSection.tsx       # Persona grid + audience overview
│   ├── EventSection.tsx     # First meeting / event details
│   ├── SignupSection.tsx    # Formspree email capture form
│   ├── FounderSection.tsx   # About Chris + Forge Agency
│   └── Footer.tsx           # Footer with links
├── docs/
│   ├── meetup-copy.md       # Ready-to-paste Meetup.com content
│   └── launch-posts.md      # Social media launch posts
├── public/
└── README.md
```

---

## Configuration

### Formspree (Email Capture)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (e.g., `xabcdefg`)
4. In `components/SignupSection.tsx`, replace `PLACEHOLDER` with your form ID:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

### Meetup.com Link
Replace placeholder `https://www.meetup.com` links with your actual Meetup group URL in:
- `components/HeroSection.tsx`
- `components/EventSection.tsx`
- `components/SignupSection.tsx`
- `components/Footer.tsx`

### Social Links
Update placeholder URLs in `components/Footer.tsx`:
- Facebook Group URL
- Nextdoor link

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo to Vercel dashboard at [vercel.com](https://vercel.com) for automatic deploys on push.

### GitHub

```bash
git init
git add .
git commit -m "Initial commit — Ride the Wave AI"
git remote add origin https://github.com/crhaines56-stack/ride-the-wave.git
git push -u origin main
```

---

## Domain Availability

Checked on April 2, 2026:

| Domain | Status | Notes |
|--------|--------|-------|
| **ridethewaveai.com** | ⚠️ Unknown — WHOIS check inconclusive | Check Namecheap/GoDaddy directly |
| **ridethewaveaustin.com** | ⚠️ Unknown — WHOIS check inconclusive | Check Namecheap/GoDaddy directly |
| **ridethewave.ai** | ⚠️ Unknown — .ai domains require manual check | Try Porkbun or Namecheap |

**Recommendation:** Check [Namecheap](https://www.namecheap.com) or [Porkbun](https://porkbun.com) directly.
- `ridethewaveai.com` is the strongest choice — clear, brandable, AI-focused
- `ridethewave.ai` is premium but perfect if available (~$50-80/yr)
- `ridethewaveaustin.com` is the local fallback

---

## Launch Checklist

### Before First Meeting

- [ ] Register domain (ridethewaveai.com recommended)
- [ ] Connect domain to Vercel
- [ ] Set up Formspree account and update form ID in code
- [ ] Create Meetup.com group (use `docs/meetup-copy.md`)
- [ ] Update all Meetup.com placeholder links in the site
- [ ] Create Facebook Group for the community
- [ ] Set up Nextdoor presence
- [ ] Confirm venue for first meeting
- [ ] Update event date in `EventSection.tsx`

### Launch Posts

Ready-to-use posts are in `docs/launch-posts.md`:
- Nextdoor post
- Facebook Groups post  
- LinkedIn post
- Twitter/X post options
- Email newsletter snippet

### After Each Meeting

- [ ] Post a recap on Meetup.com
- [ ] Share highlights in Facebook Group
- [ ] Collect email addresses from sign-in sheet → add to Formspree/email list
- [ ] Schedule next month's RSVP event

---

## Brand Guidelines

| Element | Value |
|---------|-------|
| Primary BG | `#0F172A` (deep navy) |
| Primary accent | `#06B6D4` (electric teal) |
| Secondary accent | `#F59E0B` (warm amber) |
| Text | `#F8FAFC` (near white) |
| Muted text | `#94A3B8` |
| Heading font | Plus Jakarta Sans (Bold 700/800) |
| Body font | Inter (400/500) |

---

## Contact

**Chris Haines** — Founder  
Forge Agency — [forgeagency.ai](https://forgeagency.ai)

---

*🌊 Ride the Wave AI — Northwest Austin • Free • Monthly*

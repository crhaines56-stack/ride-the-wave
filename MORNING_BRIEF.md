# 🌊 Morning Brief — Ride the Wave AI

*Built overnight — ready for review, April 2, 2026*

---

## What Was Built

A complete, polished Next.js 14 landing site for the Ride the Wave AI community meetup. Dark-mode, mobile-first, animated. Here's what's inside:

### Website Sections
1. **Hero** — Full-screen with animated SVG wave background, logo, tagline ("Ride the wave. Don't get buried by it."), dual CTAs
2. **Mission** — Big pull quote, 2-paragraph why-this-exists copy, 3 value prop cards
3. **Agenda** — Vertical timeline layout showing the 90-min meeting format with icons
4. **Who It's For** — 6-card persona grid with descriptions
5. **First Meeting** — Event detail card with location, time, date format, Meetup.com CTA
6. **Email Signup** — Formspree form with neighborhood selector + success state
7. **About the Founder** — Chris's bio, the "conversation" quote, Forge Agency link
8. **Footer** — Logo, mission, social links, Forge Agency credit

### Additional Deliverables
- `docs/meetup-copy.md` — Full Meetup.com group description, event template, and group rules
- `docs/launch-posts.md` — Nextdoor, Facebook, LinkedIn, Twitter/X, and email newsletter posts
- `README.md` — Full setup, deployment, brand guide, and launch checklist

---

## Live URL

❌ Not yet deployed — Vercel deployment requires interactive approval.

**To deploy in 2 minutes:**
```bash
cd /Users/chrishains/.openclaw/workspace/projects/ride-the-wave
npm install
vercel --prod
```

If Vercel CLI isn't installed:
```bash
npm i -g vercel
vercel --prod
```

Or: Connect the GitHub repo at vercel.com for one-click deployment.

---

## GitHub Status

Not yet pushed. To push:
```bash
cd /Users/chrishains/.openclaw/workspace/projects/ride-the-wave
git init
git add .
git commit -m "🌊 Initial build — Ride the Wave AI"
gh repo create crhaines56-stack/ride-the-wave --public --source=. --push
```

---

## Domain Availability

Automated WHOIS lookups were inconclusive (Whois.com returned minimal data). **Check these manually:**

| Domain | Where to Check | My Pick |
|--------|----------------|---------|
| **ridethewaveai.com** | namecheap.com | ⭐ Best option |
| **ridethewave.ai** | porkbun.com | Premium but perfect |
| **ridethewaveaustin.com** | namecheap.com | Local fallback |

**Recommendation:** Go for `ridethewaveai.com` first. If it's taken, `ridethewave.ai` is worth the premium (~$50-80/yr) for a brand this clean.

---

## 5 Things Chris Needs to Do to Fully Launch

### 1. Register the domain
Go to [Namecheap](https://namecheap.com) and grab `ridethewaveai.com`. If taken, check `ridethewave.ai`. This is the most time-sensitive item.

### 2. Set up Formspree
Create a free account at [formspree.io](https://formspree.io), create a new form, copy your form ID, and update `components/SignupSection.tsx` line with your ID. This activates email capture immediately.

### 3. Deploy to Vercel + connect the domain
```bash
cd /Users/chrishains/.openclaw/workspace/projects/ride-the-wave
npm install && vercel --prod
```
Then connect your domain in the Vercel dashboard. Should take 10 minutes total.

### 4. Create the Meetup.com group
Use the ready-to-paste copy in `docs/meetup-copy.md`. Update the Meetup.com links in the site once the group is live.

### 5. Post to Nextdoor and local Facebook groups
Everything is ready in `docs/launch-posts.md`. Post to:
- Steiner Ranch Nextdoor
- Steiner Ranch Facebook groups
- Lakeway community Facebook groups
- Your personal LinkedIn

The goal for Day 1 is to get 20-30 email signups and confirm a venue.

---

## Decisions Made (Worth Revisiting)

**Tagline chosen:** "Ride the wave. Don't get buried by it." — felt the most direct and memorable. Runner-up: "Your neighbors are already using AI. Let's figure it out together." (saved for social posts).

**No venue locked in:** The site says "Northwest Austin (rotating venues)" — when you have a venue, update `EventSection.tsx` with the specific address.

**Formspree as email tool:** Good free tier for launch. If the list grows past 50 signups/month, consider upgrading or moving to ConvertKit/Beehiiv for proper email marketing.

**No date announced:** The event card says "Coming Soon." Once you have a venue, pick the second Tuesday of the month you want to launch and update the site.

**Forge Agency branding:** Kept subtle — a badge on the avatar, a mention in bio text, a footer credit, and a "⚡ forgeagency.ai" link. This is the right balance for a community-first group.

---

*Built with ❤️ by Master Aegis | Forge Agency community initiative*
*🌊 Northwest Austin • Free • Monthly*

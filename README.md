# Mahmoud Tolba Portfolio

Premium one-page portfolio website for Mahmoud Tolba, a Senior Flutter Developer with 5+ years of experience shipping scalable mobile products.

## Design Direction

- Warm, premium light palette with restrained blue accenting
- Strong editorial typography for senior-level presence without template aesthetics
- Spacious layout rhythm, soft borders, and polished cards for recruiter-friendly scanning
- Subtle motion only where it helps the page feel more refined

## Content Strategy

- The CV is treated as the source of truth
- Copy is rewritten for portfolio readability while staying grounded in verified CV details
- Public project links are only shown when the CV provides them
- Missing links stay visible as elegant placeholders so the site remains complete without inventing assets

## Recruiter Structure

The page is intentionally ordered to answer the fastest recruiter questions first:

1. Who is Mahmoud and what level is he?
2. What kind of mobile engineering value does he bring?
3. Which technologies and architectural strengths are visible?
4. What experience progression supports the senior positioning?
5. Which public projects and releases back up the profile?
6. How can someone contact him or download the CV?

## Project Structure

```text
app/
components/
content/
lib/
public/
  cv/
```

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For production metadata and social URLs, optionally set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Replace / Update Later

- Update site copy, social links, and contact details in `/Users/tolba/StudioProjects/portfolio/content/site.ts`
- Update experience entries in `/Users/tolba/StudioProjects/portfolio/content/experience.ts`
- Update project links and placeholders in `/Users/tolba/StudioProjects/portfolio/content/projects.ts`
- Update grouped skills in `/Users/tolba/StudioProjects/portfolio/content/skills.ts`
- Replace the downloadable CV file at `/Users/tolba/StudioProjects/portfolio/public/cv/mahmoud-tolba-cv.pdf`

## Notes

- The implementation uses Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons.
- `app/opengraph-image.tsx` provides a ready social preview image.

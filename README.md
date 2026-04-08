# Salma Adel Portfolio

Premium one-page portfolio website for Salma Adel, a Front-End Developer focused on Angular, responsive UI, and polished web interfaces.

## Design Direction

- Warm, premium light palette with restrained blue accenting
- Strong editorial typography for a polished professional presence without template aesthetics
- Spacious layout rhythm, soft borders, and polished cards for recruiter-friendly scanning
- Subtle motion only where it helps the page feel more refined

## Content Strategy

- The CV is treated as the source of truth
- Copy is rewritten for portfolio readability while staying grounded in verified CV details
- Direct project links are only shown when the CV provides them
- Missing links are omitted rather than invented

## Recruiter Structure

The page is intentionally ordered to answer the fastest recruiter questions first:

1. Who is Salma and what front-end strengths stand out first?
2. Which technologies and UI capabilities does she bring?
3. What experience progression supports the profile?
4. Which projects back up the CV with concrete web work?
5. What education and training support the implementation skills?
6. How can someone contact her or download the CV?

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

- Update site copy, social links, and contact details in `/Users/tolba/Desktop/portfolio/content/site.ts`
- Update experience entries in `/Users/tolba/Desktop/portfolio/content/experience.ts`
- Update project links in `/Users/tolba/Desktop/portfolio/content/projects.ts`
- Update grouped skills in `/Users/tolba/Desktop/portfolio/content/skills.ts`
- Replace the downloadable CV file at `/Users/tolba/Desktop/portfolio/public/cv/salma-adel-cv.pdf`

## Notes

- The implementation uses Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons.
- `app/opengraph-image.tsx` provides a ready social preview image.

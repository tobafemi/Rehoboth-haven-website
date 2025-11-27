# CQC Registered Content - Backup for Future Use

**Date Created:** January 2025  
**Purpose:** This file contains all CQC Registered content that can be restored once registration is complete.

---

## Hero Badge (app/page.tsx)
```tsx
{/* CQC Registered Badge */}
<div className="mb-6 inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full backdrop-blur-sm">
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
  <span className="text-sm font-semibold">CQC Registered Domiciliary Care</span>
</div>
```

## Hero Trust Indicator (app/page.tsx)
```tsx
<div className="flex items-center gap-2 text-white">
  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
  <span className="text-sm font-medium">CQC Registered</span>
</div>
```

## Trust Signals Section (app/page.tsx)
```tsx
<div className="text-center">
  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  </div>
  <h3 className="text-lg font-semibold text-foreground">CQC Registered</h3>
  <p className="mt-2 text-sm text-muted-foreground">Fully compliant with Care Quality Commission standards</p>
</div>
```

## Why Choose Us - Differentiator (app/why-choose-us/page.tsx)
```tsx
{
  title: 'CQC Registered',
  description: 'Fully registered with the Care Quality Commission and committed to maintaining the highest standards of domiciliary care.',
  icon: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
}
```

## Why Choose Us - CQC Section (app/why-choose-us/page.tsx)
```tsx
{/* CQC Registration */}
<section className="py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="rounded-lg bg-primary/5 p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">CQC Registered</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Rehoboth Haven is fully registered with the Care Quality Commission (CQC), 
            the independent regulator of health and social care in England.
          </p>
          <p className="text-muted-foreground mb-6">
            We maintain the highest standards of domiciliary care and compliance, regularly reviewed 
            by the CQC to ensure we meet all regulatory requirements. Our commitment to quality care 
            is demonstrated through our ongoing compliance and continuous improvement. Our nurse-led 
            approach ensures that clinical governance and patient safety are at the forefront of 
            everything we do.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-lg bg-white p-8 shadow-lg text-center">
            <svg className="h-16 w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <p className="text-sm font-semibold text-foreground">CQC Registered</p>
            <p className="text-xs text-muted-foreground mt-2">Care Quality Commission</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Footer (components/Footer.tsx)
- Text: "CQC registered."
- Copyright: "| CQC Registered"

## SEO Descriptions
- Multiple references in: app/layout.tsx, lib/seo.ts, lib/schema.ts, app/page.tsx, app/why-choose-us/page.tsx
- Text: "CQC registered" in various descriptions

## Email Template (app/api/request-consultation/route.ts)
- Text: "Nurse-led domiciliary care in Medway and Kent | CQC Registered"

---

**Note:** When CQC registration is complete, search for "CQC Registration Pending" or "CQC Registration In Progress" and replace with the content above.


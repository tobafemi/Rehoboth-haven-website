# Pre-Production Todo List

## Email Setup - Resend Domain Configuration

**Important note**

The API route currently uses `onboarding@resend.dev` as the sender. To use your own domain:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `rehobothhaven.co.uk`)
3. Add the DNS records they provide
4. Once verified, update the `from` field in `app/api/request-consultation/route.ts` to:
   ```typescript
   from: 'Rehoboth Haven <noreply@rehobothhaven.co.uk>',
   ```

**Status:** ⏳ Pending

---

## Production Email Setup

**Current Status:** Using temporary email (`tobiobafemi18@gmail.com`) for testing due to Resend restrictions.

**To send to `rehobothaven@gmail.com` in production, you need to:**

1. **Verify a domain in Resend:**
   - Go to https://resend.com/domains
   - Add `rehobothhaven.co.uk` (or your domain)
   - Add the DNS records they provide
   - Wait for verification

2. **Update the `from` address in `route.ts`:**
   ```typescript
   from: 'Rehoboth Haven <noreply@rehobothhaven.co.uk>',
   ```

3. **Change the recipient back in `route.ts`:**
   ```typescript
   to: ['rehobothaven@gmail.com'],
   ```

**Status:** ⏳ Pending

---

## Testing Checklist

- [x] Add Resend API key to `.env.local`
- [ ] Test consultation form submission (using temporary email)
- [ ] Verify email is received at `tobiobafemi18@gmail.com` (temporary)
- [ ] Verify confirmation email is sent to user
- [ ] Update Resend domain configuration (see above)
- [ ] Change recipient back to `rehobothaven@gmail.com`
- [ ] Test with custom domain email address
- [ ] Verify email is received at `rehobothaven@gmail.com` (production)


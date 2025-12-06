# Legal Compliance Deployment Script - Stage good files only, bypass artifacts

Set-Location "c:\Users\DarrinStogsdill\OneDrive - Homeland Development Services LLC\HDS_LLC\HDS_Console\hdsok.com"

Write-Host "Staging modified files explicitly..." -ForegroundColor Green
git add .github/agents/hdsok.com*.md
git add app/about/page.tsx
git add app/hds-console/page.tsx
git add app/page.tsx
git add app/privacy-policy/page.tsx
git add app/services/facility-maintenance/page.tsx
git add app/services/page.tsx
git add components/HeroShowcase.tsx
git add components/Layout.tsx
git add components/QuickActionsGrid.tsx
git add eslint.config.mjs
git add package.json

Write-Host "Staging new legal pages..." -ForegroundColor Green
git add app/acceptable-use/
git add app/cookie-policy/
git add app/terms/
git add components/CookieConsent.tsx

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "feat: add comprehensive legal compliance framework with GDPR/CCPA cookie consent

- Add Privacy Policy with GDPR/CCPA requirements (14 sections)
- Add Terms of Service with user agreement  
- Add Cookie Policy with tracking disclosure
- Add Acceptable Use Policy with 7 prohibited categories
- Add Legal section to footer with navigation links
- Add GDPR-compliant Cookie Consent Banner with Accept/Decline options
- Implement localStorage persistence for cookie consent
- Update regional messaging (EU/Americas -> Regional/Nationwide)
- Upgrade Next.js to 19.2.1
- Fix text contrast on services pages (gray-300 to gray-100)"

Write-Host "Pulling remote changes and rebasing..." -ForegroundColor Yellow
git pull origin main --rebase

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deployment complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Vercel will auto-deploy within 2-3 minutes." -ForegroundColor Green
Write-Host "Monitor: https://vercel.com/dashboard" -ForegroundColor Yellow
Write-Host ""
Write-Host "Testing Checklist:" -ForegroundColor White
Write-Host "  1. Cookie banner appears on first visit (incognito)" -ForegroundColor Gray
Write-Host "  2. Footer Legal links navigate correctly" -ForegroundColor Gray
Write-Host "  3. Accept/Decline buttons store choice in localStorage" -ForegroundColor Gray
Write-Host "  4. All 4 legal pages load and display properly" -ForegroundColor Gray

Write-Host "Staging all changes..." -ForegroundColor Green
git add -A

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "feat: add comprehensive legal compliance framework with GDPR/CCPA cookie consent

- Add Privacy Policy with GDPR/CCPA requirements (14 sections)
- Add Terms of Service with user agreement
- Add Cookie Policy with tracking disclosure
- Add Acceptable Use Policy with 7 prohibited categories
- Add Legal section to footer with navigation links
- Add GDPR-compliant Cookie Consent Banner with Accept/Decline options
- Implement localStorage persistence for cookie consent
- Update regional messaging (EU/Americas -> Regional/Nationwide)
- Upgrade Next.js to 19.2.1
- Fix text contrast on services pages (gray-300 to gray-100)"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "" 
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deployment complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Vercel will auto-deploy within 2-3 minutes." -ForegroundColor Green
Write-Host "Monitor deployment at: https://vercel.com/dashboard" -ForegroundColor Yellow
Write-Host "" 
Write-Host "Next steps:" -ForegroundColor White
Write-Host "1. Check Vercel deployment status" -ForegroundColor Gray
Write-Host "2. Test cookie banner on live site (incognito mode)" -ForegroundColor Gray
Write-Host "3. Verify all 4 legal pages accessible from footer" -ForegroundColor Gray
Write-Host "4. Test Accept/Decline functionality" -ForegroundColor Gray

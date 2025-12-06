@echo off
cd /d "c:\Users\DarrinStogsdill\OneDrive - Homeland Development Services LLC\HDS_LLC\HDS_Console\hdsok.com"
echo Staging dashboard improvements...
git add components/DashboardCharts.tsx components/HeroShowcase.tsx app/page.tsx
echo Committing changes...
git commit -m "fix: consolidate dashboard graphs and remove duplicates

- Update DashboardCharts to support 'variant' prop (full, minimal, work-orders)
- Use 'minimal' variant in Hero section to show only key metrics and main charts
- Use 'work-orders' variant in Work Orders section to show only relevant charts
- Keep 'full' variant in Product Showcase for complete overview
- Eliminates visual redundancy while maintaining context-specific data"
echo Pushing to GitHub (FORCE)...
git push origin main --force
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS! Dashboard improvements pushed!
    echo ========================================
    echo.
    echo Changes:
    echo  - Hero: Minimal dashboard view
    echo  - Work Orders: Focused work order charts
    echo  - Product Showcase: Full dashboard
    echo.
    echo Vercel will rebuild and deploy.
    echo Monitor at: https://vercel.com/dashboard
    echo.
) else (
    echo Push failed with error code: %ERRORLEVEL%
)
pause

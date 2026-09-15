# Shanvi Tour & Travels — Next.js + Tailwind CSS

Aapki purani HTML/CSS/JS (Bootstrap-based) website ka pura Next.js 14 (App Router) +
Tailwind CSS mein conversion.

## Project Structure

```
shanvi-travels/
├── app/
│   ├── layout.js              # Root layout (fonts, Font Awesome, metadata)
│   ├── globals.css            # Tailwind + custom scrollbar/animations
│   ├── page.js                # Home page
│   ├── about/page.js
│   ├── services/page.js
│   ├── chardham-yatra/page.js
│   ├── tour-packages/page.js
│   └── contact/page.js        # Booking form + Google Map
├── components/
│   ├── Navbar.js               # Sticky navbar + mobile menu (client component)
│   ├── Footer.js
│   ├── FloatingButtons.js      # Call / WhatsApp floating buttons
│   ├── PageBanner.js           # Reusable inner-page hero banner
│   ├── SectionHeader.js        # Reusable centered section title
│   ├── DestinationCard.js      # Reusable taxi/destination card
│   ├── TourPackageCard.js      # Reusable tour package card
│   └── BookingForm.js          # Client form → sends booking via WhatsApp
├── public/images/logo.jpeg     # Extracted from your original HTML (was base64)
├── tailwind.config.js          # Brand colors (primary/secondary/accent) mapped
└── package.json
```

## Run It Locally

```bash
cd shanvi-travels
npm install
npm run dev
```

Then open **http://localhost:3000**

## Kya Convert Hua

- **Bootstrap grid & utility classes → Tailwind** (`row/col` → `grid`/`flex`,
  `d-flex`, `text-center`, etc.)
- **Custom CSS variables** (`--primary`, `--secondary`, `--accent`) → Tailwind
  theme colors (`tailwind.config.js` mein `primary`, `secondary`, `accent`)
- **Google Font "Plus Jakarta Sans"** → `next/font/google` (optimized, no
  extra network request needed at runtime)
- **Har page ka repeated Navbar/Footer/Floating buttons** → shared React
  components (DRY — ab sirf ek jagah edit karo, sab pages update ho jayenge)
- **Contact form ka WhatsApp-submit JS logic** aur **`?dest=` URL param
  prefill** → `BookingForm.js` client component mein React state/hooks se
  convert kiya gaya
- **Logo image** jo aapki HTML files mein base64 embedded tha, usse nikal ke
  `public/images/logo.jpeg` mein save kar diya (isse har page ka HTML size
  bahut chhota ho gaya)
- Font Awesome icons CDN se link kiye hain (`app/layout.js`), sab icons
  as-it-is kaam karenge

## Note: `app.js`

Aapne jo `app.js` file bheji thi (packages filter, itinerary modal, FAQ
accordion), uske IDs (`packagesContainer`, `bookingModal`, etc.) kisi bhi
uploaded HTML page se match nahi hue — lagta hai ye kisi alag/purani page ka
code hai. Isliye ye conversion mein include nahi kiya gaya hai. Agar aapko ye
package-browsing feature bhi chahiye (interactive package cards + modal),
bata dena — alag se bana denge.

## Deploy

Sabse aasan tareeka: [Vercel](https://vercel.com) par is folder ko push kar
ke deploy kar do (Next.js banane wali company hi hai, zero-config deploy).

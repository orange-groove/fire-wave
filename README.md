# Fire Wave Sound

## Local development

```bash
yarn
yarn dev
```

## Environment variables

### Contact form

- `RESEND_API_KEY`
- `CONTACT_EMAIL` (optional)

### Google Reviews section

The home page includes a **Google Reviews** section powered by a server endpoint at `GET /api/google-reviews` (so the API key is never exposed to the browser).

Set:

- `GOOGLE_PLACES_API_KEY`: Google API key with **Places API** enabled
- `GOOGLE_PLACE_ID`: the Place ID for your business

Notes:

- The endpoint caches responses for ~1 hour.
- The UI links back to Google for attribution.

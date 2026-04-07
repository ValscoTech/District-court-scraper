# Redeployment Guide — Cloud Run

## Quick Redeploy (one command)

```bash
gcloud run deploy district-court-scraper \
  --source . \
  --region asia-south1 \
  --port 3000 \
  --project=valsco-jurident \
  --allow-unauthenticated \
  --max-instances=1 \
  --min-instances=1 \
  --set-env-vars NODE_ENV=production,FIREBASE_API_KEY=AIzaSyAKQVDRTt5i5i0cNyrSxxW_N-S1vpwm4Ec,FIREBASE_AUTH_DOMAIN=valsco-jurident.firebaseapp.com,FIREBASE_PROJECT_ID=valsco-jurident,FIREBASE_STORAGE_BUCKET=valsco-jurident.firebasestorage.app,FIREBASE_MESSAGING_SENDER_ID=596718606544,FIREBASE_APP_ID=1:596718606544:web:4dc72fd5ccab6b72bd66d5,FIREBASE_MEASUREMENT_ID=G-CVM890582X
```

Run this from the project root directory. It builds the Docker image and deploys automatically.

## Service Details

| Key | Value |
|-----|-------|
| Service Name | `district-court-scraper` |
| Region | `asia-south1` (Mumbai) |
| Project | `valsco-jurident` |
| URL | https://district-court-scraper-596718606544.asia-south1.run.app |
| Port | 3000 |
| Max Instances | 1 (required — app uses in-memory sessions) |
| Min Instances | 1 (keeps instance warm, prevents session loss) |

## Useful Commands

```bash
# View logs
gcloud run services logs read district-court-scraper --region asia-south1 --project=valsco-jurident

# Check service status
gcloud run services describe district-court-scraper --region asia-south1 --project=valsco-jurident

# View recent revisions
gcloud run revisions list --service district-court-scraper --region asia-south1 --project=valsco-jurident

# Rollback to previous revision
gcloud run services update-traffic district-court-scraper --to-revisions=REVISION_NAME=100 --region asia-south1 --project=valsco-jurident
```

## Notes

- **In-memory sessions**: App stores eCourts scraping sessions in a `Map()`. Keep `max-instances=1` to avoid session issues across instances.
- **min-instances=1**: Keeps one instance always running (~$5-7/month). Remove if cost is a concern (sessions may be lost on cold starts).
- **Firewall rule**: `allow-http-3000` was created for the old VM setup. Can be deleted: `gcloud compute firewall-rules delete allow-http-3000 --project=valsco-jurident`

# Migration Script Instructions

## Prerequisites

1. **Install Firebase Admin SDK**:
   ```bash
   npm install --save-dev firebase-admin ts-node
   ```

2. **Download Service Account Key**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to **Project Settings** → **Service Accounts**
   - Click **Generate New Private Key**
   - Save the JSON file as `service-account-key.json` in the project root
   - **IMPORTANT**: Add this file to `.gitignore` to prevent committing credentials

## Running the Migration

1. **Ensure images exist** in `public/images/projects/`:
   - project-1.jpg
   - project-2.jpg
   - project-3.jpg
   - project-4.jpg
   - project-5.jpg

2. **Run the script**:
   ```bash
   npx ts-node scripts/migrate-projects.ts
   ```

3. **Deploy security rules**:
   ```bash
   firebase deploy --only firestore:rules
   firebase deploy --only storage
   ```

4. **Verify in Firebase Console**:
   - Check Firestore → `projects` collection (should have 6 documents)
   - Check Storage → `projects/` folder (should have 5 images)

## After Migration

Once verified, you can safely delete:
- `src/data/projects.ts` (static data no longer needed)
- `scripts/migrate-projects.ts` (one-time use)
- `service-account-key.json` (keep secure, don't commit)

## Troubleshooting

- **Error: Cannot find module**: Run `npm install --save-dev firebase-admin ts-node`
- **Permission denied**: Ensure service account key is valid
- **Image not found**: Check that images exist in `public/images/projects/`

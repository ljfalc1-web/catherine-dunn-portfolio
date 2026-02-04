import { google } from 'googleapis'
import { PortfolioItem, PortfolioCategory } from './types'
import { portfolioItems as fallbackItems } from './data'

const VALID_CATEGORIES: PortfolioCategory[] = [
  'Digital',
  'Print',
  'Social',
  'Influencer Partnerships',
  'Events',
]

function isValidCategory(category: string): category is PortfolioCategory {
  return VALID_CATEGORIES.includes(category as PortfolioCategory)
}

function parseResults(results: string): string[] {
  if (!results || results.trim() === '') return []
  return results
    .split(';')
    .map((r) => r.trim())
    .filter((r) => r.length > 0)
}

function parseEmbedType(
  embedType: string
): 'instagram' | 'tiktok' | undefined {
  const normalized = embedType?.toLowerCase().trim()
  if (normalized === 'instagram' || normalized === 'tiktok') {
    return normalized
  }
  return undefined
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!privateKey || !clientEmail || !spreadsheetId) {
    console.warn(
      'Google Sheets credentials not configured, using fallback data'
    )
    return fallbackItems
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A2:K',
    })

    const rows = response.data.values

    if (!rows || rows.length === 0) {
      console.warn('No data found in spreadsheet, using fallback data')
      return fallbackItems
    }

    const items: PortfolioItem[] = []

    for (const row of rows) {
      const [
        id,
        title,
        client,
        category,
        description,
        thumbnail,
        year,
        results,
        embedType,
        embedUrl,
        externalLink,
      ] = row

      if (!id || !title || !client || !category || !description || !thumbnail) {
        console.warn(`Skipping incomplete row: ${id || 'no id'}`)
        continue
      }

      if (!isValidCategory(category)) {
        console.warn(
          `Skipping row with invalid category: ${category} (id: ${id})`
        )
        continue
      }

      const item: PortfolioItem = {
        id: id.trim(),
        title: title.trim(),
        client: client.trim(),
        category: category as PortfolioCategory,
        description: description.trim(),
        thumbnail: thumbnail.trim(),
        year: parseInt(year, 10) || new Date().getFullYear(),
      }

      const parsedResults = parseResults(results)
      if (parsedResults.length > 0) {
        item.results = parsedResults
      }

      const parsedEmbedType = parseEmbedType(embedType)
      if (parsedEmbedType) {
        item.embedType = parsedEmbedType
      }

      if (embedUrl && embedUrl.trim()) {
        item.embedUrl = embedUrl.trim()
      }

      if (externalLink && externalLink.trim()) {
        item.externalLink = externalLink.trim()
      }

      items.push(item)
    }

    if (items.length === 0) {
      console.warn('No valid items parsed from spreadsheet, using fallback data')
      return fallbackItems
    }

    return items
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    return fallbackItems
  }
}

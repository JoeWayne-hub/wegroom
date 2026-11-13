// Central configuration. Update these values by hand; nothing here is auto-synced.
export const fundraising = {
  target: 100_000_000, // ₦100,000,000 (One Hundred Million Naira)
  raised: 0, // MANUALLY maintained figure: update after confirming donations
} as const

export const bank = {
  bankName: 'Providus Bank',
  accountName: 'WeGroom Global Limited',
  accountNumber: '1309126246',
} as const

export const formatNaira = (n: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n)

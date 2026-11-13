import { BadgeCheck, Link2, Search, Sprout, Sparkles, TrendingUp, Users } from 'lucide-react'

const map = { search: Search, badge: BadgeCheck, users: Users, link: Link2, sprout: Sprout, spark: Sparkles, trend: TrendingUp }
export default function Icon({ name, className }: { name: keyof typeof map; className?: string }) {
  const C = map[name]
  return <C className={className} aria-hidden />
}

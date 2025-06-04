import dynamic from 'next/dynamic'
const IndividualHome = dynamic(
  () => import('individualsellerapp/IndSellerHome'),
  { ssr: false },
)
export default function IndividualPage() {
  return <IndividualHome />
}

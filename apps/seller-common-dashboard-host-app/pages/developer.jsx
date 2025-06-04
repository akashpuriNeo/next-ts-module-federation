import dynamic from 'next/dynamic'
const DeveloperHome = dynamic(
  () => import('developerpartnerapp/DeveloperHome'),
  { ssr: false },
)
export default function DeveloperPage() {
  return <DeveloperHome />
}

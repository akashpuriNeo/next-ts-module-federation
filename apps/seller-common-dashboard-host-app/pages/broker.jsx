import dynamic from 'next/dynamic'

const BrokerHome = dynamic(() => import('brokerpartnerapp/BrokerHome'), {
  ssr: false,
  loading: () => <p>Loading Broker...</p>,
})

export default function BrokerPage() {
  return <BrokerHome />
}

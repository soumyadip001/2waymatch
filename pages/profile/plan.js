import ProfileFooter from '../../components/Footers/ProfileFooter'
import Row from '../../components/atoms/Row'
import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import Col from '../../components/atoms/Col'
import PriceCard from '../../components/atoms/PriceCard'
import Card from '../../components/atoms/Card'
import ButtonOutline from '../../components/buttons/ButtonOutline'

export default function Plan() {
  const starterFeatureList = [
    "Send 10 quotes and invoices",
    "Connect up to 2 bank accounts",
    "Track up to 15 expenses per month",
    "Manual payroll support",
    "Export up to 3 reports"
  ]

  const enterpriceFeatureList = [
    "Send 25 quotes and invoices",
    "Connect up to 5 bank accounts",
    "Track up to 50 expenses per month",
    "Automated payroll support",
    "Export up to 12 reports",
    "Bulk reconcile transactions",
    "Track in multiple currencies"
  ]

  const setPlan = (plan) => {
    console.log(plan)
  }

  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Plan</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar active='Plan' />
        </div>
        <div className="flex flex-col w-4/5">
          <div className='flex flex-col w-full gap-4'>
            <h2 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-2xl'>Flexible pricing options</h2>
            <p className='text-lg'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
            </p>
            <Row gap={4} mt={4} flexItems={'start'}>
              <Col size={4}>
                <PriceCard
                  title={'Starter'}
                  description={'This is perfect for individual customers'}
                  price={1800}
                  items={starterFeatureList}
                  onClick={() => setPlan('starter')}
                />
              </Col>
              <Col size={4}>
                <PriceCard
                  title={'Pro'}
                  description={'This is perfect for pro customers with many profile access needed'}
                  price={3500}
                  items={starterFeatureList}
                  onClick={() => setPlan('pro')}
                />
              </Col>
              <Col size={4}>
                <PriceCard
                  title={'Enterprise'}
                  description={'This is perfect for enterprise customers'}
                  price={6000}
                  items={enterpriceFeatureList}
                  onClick={() => setPlan('enterprise')}
                />
              </Col>
            </Row>

            <h2 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-2xl'>Support Options</h2>
            <Row gap={4} mt={4} flexItems={'start'}>
              <Col size={6}>
                <Card gap={4}>
                  <h2 className='text-xl font-bold tracking-tight sm:text-3xl md:text-2xl'>Need a support?</h2>
                  <p>View message performance and test again variants and control</p>
                  <ButtonOutline>Contact Us</ButtonOutline>
                </Card>
              </Col>
              <Col size={6}>
                <Card gap={4}>
                  <h2 className='text-xl font-bold tracking-tight sm:text-3xl md:text-2xl'>Customize Plan?</h2>
                  <p>Looking for something else? Request a consultation to customize a plan.</p>
                  <ButtonOutline>Contact Us</ButtonOutline>
                </Card>
              </Col>
            </Row>
          </div>
          <ProfileFooter />
        </div>
      </div>
    </div>
  )
}
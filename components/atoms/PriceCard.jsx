import ButtonOutline from "../buttons/ButtonOutline"
import Card from "./Card"
import CardHeader from "./CardHeader"
import List from "./List"

function PriceCard({ title, description, price, items, onClick }) {
  return (
    <Card px={8}>
      <CardHeader
        title={title}
        description={description}
      />
      <div className="text-2xl text-bold my-4">Rs {price}/y</div>
      <List items={items} />
      <ButtonOutline mt={4} onClick={onClick}>Buy Now</ButtonOutline>
    </Card>
  )
}

export default PriceCard

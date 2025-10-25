import { getPayload } from 'payload'
import config from '@payload-config'
import AddCar from '@/components/AddCar'
import Car from '@/components/Car'

async function CarsPage() {
  const payload = await getPayload({ config })

  const cars = await payload.find({
    collection: 'cars',
  })

  return (
    <main className="text-white">
      <h1>Car Collection</h1>
      <p>Welcome to the Car collection!</p>

      <Car
        cars={(cars?.docs ?? []).map((car) => ({
          ...car,
          image: car.image ?? '',
        }))}
      />

      <AddCar />
    </main>
  )
}
export default CarsPage

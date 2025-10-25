import { getPayload } from 'payload'
import config from '@payload-config'
import AddCar from '@/components/AddCar'
import Image from 'next/image'

async function CarsPage() {
  const payload = await getPayload({ config })

  const cars = await payload.find({
    collection: 'cars',
  })

  console.log('Cars Data:', cars.docs[0].image)

  return (
    <main className="text-white">
      <h1>Car Collection</h1>
      <p>Welcome to the Car collection!</p>

      {cars.docs.map((car, index) => (
        <div key={car.id || index} className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{car.title}</h2>
          <p className="mb-1">Manufacturer: {car.manufacturer}</p>
          <p className="mb-1">Year: {car.year}</p>
          <p className="mb-1">Price: ${car.price} </p>
          <div className="mt-2">
            <Image
              src={`${car.image as string}`}
              alt={car.title}
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
        </div>
      ))}

      <AddCar />
    </main>
  )
}
export default CarsPage

/*
  

    */

'use client'

import UpdateCar from '@/app/(frontend)/cars/actions.ts/Update'
import Image from 'next/image'

interface CarType {
  id: number
  title: string
  manufacturer: string
  year: number
  price: number
  image: string | null | undefined
}

export default function Car({ cars }: { cars: Array<CarType> }) {
  return (
    <>
      {cars.map((car, index) => (
        <div key={car.id || index} className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{car.title}</h2>
          <p className="mb-1">Manufacturer: {car.manufacturer}</p>
          <p className="mb-1">Year: {car.year}</p>
          <p className="mb-1">Price: ${car.price} </p>
          <div className="mt-2">
            <Image
              src={`${car.image}`}
              alt={car.title}
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <button
            onClick={() => UpdateCar(car.id)}
            className="bg-yellow-600 text-white p-2 rounded-md"
          >
            Update
          </button>
        </div>
      ))}
    </>
  )
}

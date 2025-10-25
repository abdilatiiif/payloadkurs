export default async function UpdateCar(carId: number) {
  console.log('Updating car with ID:', carId)

  const result = window.prompt(
    'Enter field to update: title, price, manufacturer, year, slug, image',
  )

  let updateData = {}

  switch (result) {
    case 'title':
      const newTitle = window.prompt('Enter new title:')
      updateData = { title: newTitle }
      break
    case 'price':
      const newPrice = window.prompt('Enter new price:', '777700')
      updateData = { price: Number(newPrice) }
      break
    case 'manufacturer':
      const newManufacturer = window.prompt('Enter new manufacturer:', 'BYD')
      updateData = { manufacturer: newManufacturer }
      break
    case 'year':
      const newYear = window.prompt('Enter new year:', '2028')
      updateData = { year: Number(newYear) }
      break
    case 'slug':
      const newSlug = window.prompt('Enter new slug:', 'BYD')
      updateData = { slug: newSlug }
      break
    case 'image':
      const newImage = window.prompt('Enter new image URL:', 'https://byd.no/_next/image?url=...')
      updateData = { image: newImage }
      break
    default:
      console.log('Invalid update option')
      return null
  }

  try {
    await fetch(`/api/cars/${carId}`, {
      method: 'PATCH', // or PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...updateData,
      }),
    })
  } catch (error) {
    console.error('Error updating car:', error)
    return null
  }
}

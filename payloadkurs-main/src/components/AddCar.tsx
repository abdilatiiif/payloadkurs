'use client'

function AddCar() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log('Form Data:', data)

    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          manufacturer: data.manufacturer,
          year: Number(data.year),
          price: Number(data.price),
          slug: data.slug,
          image: data.image,
        }),
      })

      if (response.ok) {
        alert('Car added successfully!')
      } else {
        alert('Failed to add car')
      }
    } catch (error) {
      alert('Error: ' + error)
    }
  }

  return (
    <div className="bg-white text-black w-full max-w-md flex flex-col">
      <form
        className="bg-white flex items-center h-full flex-col gap-5 border-2 text-black p-4 rounded-lg"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 w-full"
          type="text"
          name="title"
          placeholder="Car Title"
          required
        />
        <input
          className="border-2 w-full"
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          required
        />
        <input className="border-2 w-full" type="number" name="year" placeholder="Year" required />
        <input
          className="border-2 w-full"
          type="number"
          name="price"
          placeholder="Price"
          required
        />
        <input className="border-2 w-full" type="text" name="slug" placeholder="Slug" required />
        <input
          className="border-2 w-full"
          type="text"
          name="image"
          placeholder="Image URL"
          required
        />
        <button className="bg-green-600 w-full" type="submit">
          Add Car
        </button>
      </form>
    </div>
  )
}
export default AddCar

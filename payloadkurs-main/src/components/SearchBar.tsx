import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row w-full min-w-[300px] justify-center items-center gap-5 mr-5">
      <Input
        className=" max-w-[600px] h-10 md:flex-1 border-2 border-gray-700 focus:border-gray-500 focus:ring-0 outline-none"
        type="text"
        id="search"
        placeholder="Search..."
      />
      <Button
        className="hover:bg-gray-600 border-2 border-gray-700 cursor-pointer w-full h-10 md:max-w-[100px]"
        type="submit"
      >
        Search <Search className="ml-2" />
      </Button>
    </div>
  )
}

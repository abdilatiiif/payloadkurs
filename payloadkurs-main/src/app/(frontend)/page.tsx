import { headers as getHeaders } from 'next/headers.js'

import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Image from 'next/image'

import carImage from '/Users/abdilatif/Desktop/web/prosjekter/payloadkurs/payloadkurs-main/src/lib/carbg.png'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <header className="absolute slide-in-left top-70 left-20 bg-black rounded-2xl text-center text-white px-4">
        <h1 className=" text-2xl bold">Where every car has a story – and every driver a voice</h1>
      </header>
      <h2 className="bg-black slide-in-right text-2xl rounded-2xl px-1 text-white bold absolute slide-in-left top-80 right-20">
        Connect, comment, and cruise through your feed.
      </h2>

      <p>cars container</p>

      <a href={payloadConfig.routes.admin} rel="noopener noreferrer" target="_blank">
        Go to admin panel
      </a>
    </main>
  )
}

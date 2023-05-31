import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {

    const data: Prisma.UserExampleCreateInput['data'][] = [

    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )


    Promise.all(
      
      data.map(async (data: Prisma.UserExampleCreateInput['data']) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

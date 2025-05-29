const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  
  try {
    // Test connection
    await prisma.$connect()
    console.log('Database connected successfully')
    
    // Run any necessary setup
    await prisma.$disconnect()
  } catch (error) {
    console.error('Database connection failed:', error)
    process.exit(1)
  }
}

main()
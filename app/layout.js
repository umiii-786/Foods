
import './globals.css'



export const metadata = {
  title: 'Flarvo APP',
  description: 'We have the best Food for Dinner Lunch ',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body className='bg-gray-100 '>
          {children}  
          </body>
          
    </html>
  )
}

import Head from 'next/head'
import Container from '../components/container'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ed Williams Development</title>
      </Head>
      <Container>
        <div className="absolute-center w-full text-center px-2">
          <h2 className="text-xl">
            Wiltshire based software engineer, specialising in React / JavaScript / Node
          </h2>
          {/* <h3 className="text-yellow-300 uppercase underline mt-2 font-medium">projects</h3> */}
          <h3 className="text-yellow-300 uppercase italic mt-2 font-medium">
            website refresh underway - back soon!
          </h3>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

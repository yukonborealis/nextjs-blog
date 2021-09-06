// import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function User() {
    return (
        <Layout>
            <h1>User</h1>
            <Head>
                <title className="gold">user</title>
            </Head>
            <Image src="/images/meow.jpeg" width="150" height="200" alt="meow" />
            {/* <Link href="/">
                <a>Back to home</a>
            </Link> */}

            <style jsx global>{`
                .gold {
                    color: gold;
                }
            `}</style>
        </Layout>
    )
}
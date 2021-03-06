import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { Button, Card, Avatar } from '@adox/adox-design-system';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a>Welcome to Jurassic Park</a>
        </h1>
        <nav>
          <Link href='/PaginaPrueba'>
            pagina de prueba
          </Link>
        </nav>
      </main>
    </div>
  )
}

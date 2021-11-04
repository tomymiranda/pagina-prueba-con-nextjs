import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { Button } from '@adox/adox-design-system';
export default function PaginaPrueba({nombre}) {
    return (

        <>
            <h1 className={styles.title}>pagina de prueba y muestra: {nombre}</h1>
            <Button customClassNames=""
            onClick={() => {null}}>
            <Link href="/"> 
                <a>volver al inicio </a>
                </Link>
            </Button>
            

        </>)
}


// solo next.js
PaginaPrueba.getInitialProps = () =>{
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response =>{
         console.log(response)
         const {nombre} = response
         return {nombre}
    })
}


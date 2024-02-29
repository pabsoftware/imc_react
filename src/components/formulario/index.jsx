import { useEffect, useState } from 'react';
import styles from './Formulario.module.css'

    const Formulario = () => {

        const [peso, setPeso]       = useState(0);
        const [altura, setAltura]   = useState(0);

               
        const calculaIMC = () => {
            const imc = parseFloat((peso / Math.pow(altura, 2)).toFixed(2));
            
            if (peso > 0 && altura > 0) {
            
                if ( imc < 18.5) {
                    return (<>
                        <h2>{imc}</h2>
                        <p> Seu indici de classificação é MAGREZA e graude de obsidade é 0</p> </>
                    ); 
                } else if (18.5 <= imc && imc < 25) {
                    return ( 
                        <>
                        <h2>{imc}</h2>
                        <p> Seu indici de classificação é NORMAL e graude de obsidade é 0</p> 
                        </>
                    ); 
                } else if (25 <= imc && imc  < 30) {
                    return ( 
                        <>
                        <h2>{imc}</h2>
                        <p> Seu indici de classificação é SOBREPESO e graude de obsidade é I</p> 
                        </>
                    ); 
                } else if (30 <= imc && imc  < 40) {
                    return ( 
                        <>
                        <h2>{imc}</h2>
                        <p> Seu indici de classificação é OBESIDADE e graude de obsidade é II</p> 
                        </>
                    ); 
                } else if (imc >= 40) {
                    return ( 
                        <>
                        <h2>{imc}</h2>
                        <p> Seu indici de classificação é OBESIDADE GRAVE e graude de obsidade é III</p> 
                        </>
                    ); 
                }
            }
            
        }

    return (
        <div className="container">
            <form >
                <div className={styles.formCadastro}>
                        <input type="number" onChange={(evento) => setPeso(evento.target.value)} placeholder='Informe seu peso'/>
                        <input type="number" onChange={(evento) => setAltura(evento.target.value)} placeholder='Informe sua altura, ex: 1.65'/>
                    <button >Limpar</button>
                </div>
                
            </form>
            <div className={styles.resultadoIMC}>
                <h2>Seu resultado: {calculaIMC()}</h2>
            </div>
            
        </div>
       
    )
}

export default Formulario;
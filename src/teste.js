//Testando um callback

/*let minhaF = setInterval(function () {
    console.log(10 + 2)
}, 1000);

function somar(n1, n2) {
    return n1 + n2;
}


//Testando uma promisse
//Para provocar um erro, basta adicionar uma letra na function somar
async function main() {
    try {
        const resultado = await somar(10, a4);
        console.log(resultado);
    } catch (error) {
        console.log("Um erro foi encontrado")
    }

}


main();


//variável com array de informações
const info = {
    pesoal: {
        nome: "Lydia",
        idade: 25
    },

    formacao: [
        {
            nome: "Ensino médio",
            dataInicio: "31/12/2013",
        },

        {
            nome: "Curso Design",
            dataInicio: "02/02/2017"
        }
    ],
    experiencia: [
        {
            empresa: "BS",
            dataInicio: "2019"
        },
        {
            empresa: "RP",
            dataInicio: "2020"
        }
    ]
}


//exemplo de como passar as informações para outro componente
function retornarInfos() {
    return (
        <Formacao dados={info.formacao} />
    )
}

//exemplo de como puxar dados quando clicar no botão
function Formacao({ dados }) {
    return (
        <div>
            {dados.map(
                (experiencia) => {
                    return (
                        <button>{experiencia.nome}</button>
                    )
                }
            )}
        </div>
    )
}




//Exemplos de promisse que o professor passou
export function somarAsyncPromise(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n1 + n2)
        }, 2000)
    })
}

export function somarAsyncPromiseError(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Deu ruim')
        }, 2000)
    })
}*/

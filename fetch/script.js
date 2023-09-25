let cervejas = []
let users = []


    const carregarDiv = cs => {
    const div = document.getElementById("usersDiv")
    const itensHtml = cs.map( ({first_name, username, email}) => `
        <tr>
            <td>${first_name}</td>
            <td>${username}</td>
            <td>${email}</td>
        </tr>
    ` ) 
    div.innerHTML = `
        <table>
            <tr>
                <th>Nome</th>
                <th>Username</th>
                <th>E-mail</th>
            </tr>
            ${itensHtml.join("\n")}
        </table>
    `
    }

    async function carregarUsuarios(){
        try{
            let res = await fetch("https://random-data-api.com/api/v2/users?size=3")
            usuarios = await res.json()
            carregarDiv(usuarios)
        }catch(err){
            document.getElementById("usersDiv").innerHTML = "Nenhum dado encontrado..."
        }
    }

    let botao = document.getElementById("botaoCarregar")
    botao.addEventListener("click", () => carregarUsuarios() )
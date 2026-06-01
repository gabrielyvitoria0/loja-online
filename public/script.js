async function comprar(produto, preco){
    const respota = await fetch("/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            produto,
            preco
        })

    })

    const dadaos = await respota.json()
    const stripe = Stripe("pk_test_51TZrXnRua0kTWEDBDwKYK10S8gGOfMU96ZTUelQcudrX9tuEz7buuJw9ac0XiIKCtB3Us829iZyGToWymjNQNv5T00LPsV5TYj")
    sessionid: dados.id
}

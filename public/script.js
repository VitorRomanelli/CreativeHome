
function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}

function checkFields (event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link"
    ]

    const isEmpty = valuesToCheck.find(function(value) {
        
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty){
            return true
        }

    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor preencha todos os campos!")
    }
    
}

function excluir() {
    
    db.run(`DELETE FROM ideas WHERE id = ?`, [8], function(err) {
        if(err) return console.log(err)
        
    })

    console.log("DELETEI")
}
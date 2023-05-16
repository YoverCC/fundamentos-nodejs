function asincrona(callback) {
    setTimeout(() => {
        try{
            let a = 3 + z;
            callback(null, a);
        } catch(e){
            callback(e); // devuelve undefined de esta forma, sin embargo tambien se puede colocar lo que se requiera: callback(e, null);
        }
    }, 1000);
}


asincrona(function (err, dato) {
    if(err){
        console.error('Tenemos un error');
        console.error(err);
        //throw err; // bloquea, si se quiere que el bloque superior gestione el error
        //throw NO VA A FUNCIONAR para funciones asincronas 
        return false;
    }
    console.log('todo ha ido bien, mi data es', dato);
})
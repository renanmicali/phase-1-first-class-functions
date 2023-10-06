function receivesAFunction (callback){
    callback()
}

const returnsANamedFunction = ()=> {
    return function nFunction(){}
}

const returnsAnAnonymousFunction = () => {
    return ()=>{}
}

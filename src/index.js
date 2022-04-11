import store from './store';

console.log(store);  //{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

console.log(store.getState());  //[]

//改變store都會做一次
const unsubscribe = store.subscribe(()=>{
    console.log('Store changed!', store.getState());
})

store.dispatch({
    type:"bugAdded",
    payload:{
        description:"Bug1"
    }
});
unsubscribe()
console.log(store.getState());  //{id: 1, description: 'Bug1', resolved: false

store.dispatch({
    type:'bugRemoved',
    payload:{
        id:1
    }
})
console.log(store.getState()); //[]
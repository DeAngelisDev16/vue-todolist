const {createApp} = Vue

createApp({
    data() {
        return{
            newToDo: '',
            toDoList: [
              { text: 'Pulire il giardino', done: false }, 
              { text: 'Aggiustare il lavandino', done: true }, 
              { text: 'Fare la lavatrice', done: false },
              { text:'Lavare i piatti', done: false},
            ],
           
              
        }

    },
    
    
    methods: { 
        addNewItem(newToDo){ //MILESTONE3
            let newItem = {
                text: newToDo,
                done: false
            }
            if(this.newToDo != ''){
                this.toDoList.push(newItem)
            }

            this.newToDo = ''; 

        },

        removeItem(itemToRemove){  //MILESTONE2
            itemIndex = this.toDoList.indexOf(itemToRemove);
            if(itemIndex > -1){
                this.toDoList.splice(itemIndex, 1);
            }

        }

       
    }
}) .mount('#app');



/* MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */



/* toDo : 
[
{ text: 'Pulire il giardino', done: false }, 
{ text: 'Aggiustare il lavandino', done: true }, 
{ text: 'Fare la lavatrice', done: false },
{ text:'Lavare i piatti', done: false}
]; */
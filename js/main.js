const { createApp } = Vue

createApp({
  data() {
    return {
        done : false,
        errorEmpty: false,
        errorMinChar: false,
        newTask: '',
        tasks: [
            {
                text: 'first', 
                done: false
            },
            {
                text: 'second', 
                done: true
            },
            {
                text: 'thrdd', 
                done: false
            }
        ]
    }
},
    methods:{
        addNew(){
            if ( this.newTask == ""){
                this.errorEmpty = true
                this.errorMinChar = false
            }
            else if ( this.newTask.length < 3){
                this.errorMinChar = true
                this.errorEmpty = false
                
            }
            else{
                this.errorEmpty = false
                this.errorMinChar = false
                this.tasks.push({text : this.newTask})
            }
            this.newTask=""
        },
        deleteTask(indice){
            if (confirm('Sei sicuro di voler cancellare?')) {
                this.tasks.splice(indice,1)
              } 
        },
        doneFunc(indice){
           this.tasks[indice].done = true;
           console.log(indice);

        }
    },
    mounted(){
       
    }
}).mount("#app")




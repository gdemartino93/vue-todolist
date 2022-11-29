const { createApp } = Vue

createApp({
  data() {
    return {
        errorEmpty: false,
        errorMinChar: false,
        newTask: '',
        tasks: [
            {
                text: 'Fare i compiti', 
                done: false
            },
            {
                text: 'Fare la spesa', 
                done: true
            },
            {
                text: 'Fare il bucato', 
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
        deleteTask(i){
            if (confirm('Sei sicuro di voler cancellare?')) {
                this.tasks.splice(i,1)
              } 
        }
    },
    mounted(){
       
    }
}).mount("#app")
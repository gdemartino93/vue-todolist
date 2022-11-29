const { createApp } = Vue

createApp({
  data() {
    return {
        errorEmpty: false,
        errorMinChar: false,
        error : false,
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
            }
            else if ( this.newTask.length < 3){
                this.errorMinChar = true
                
            }
            else{
                this.tasks.push({text : this.newTask})
            }
            this.newTask=""
        }
    }

}).mount("#app")
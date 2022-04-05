// Implementar solución aquí

Vue.createApp({
    data() {
        return {
            bgColor: 'hola'
        }
    },
    methods: {
        updateRandomQuote() {          
            this.bgColor = this.generateRandomQuote();;
        },
        generateRandomQuote() {                     
        return quotes[Math.floor(Math.random() * quotes.length)];
        
    }      
}

}).mount('#app')

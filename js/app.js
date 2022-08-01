const app = Vue.createApp({
    data(){
        return {
            loading : true , 
            joke : ''
        }
    } , 
    methods : {
        getJoke(){
            this.loading = true ; 
            setTimeout(async () => {

                const response = await fetch("https://icanhazdadjoke.com", {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                  },
                });
                const data = await response.json();
                this.loading =false;
                this.joke = data.joke;
               
              }, 1000);
        }
    } ,
    mounted(){
        this.getJoke();
    }
});

app.mount('#app');
//Syntax -1 : To create a variable

const App = { // App is a variable
    data(){ //vue property
        return { //we always return an object {}
            name: "Pooja N G" //key value pairs
        }
    }
}

//vue is variable that we are able to access as we have linked "unpkg.com/vue@next" in head(html)
//createApp is a method of vue
//App is the variable created above ....it is bbeing injected as below
//it can be mounted on any class or id.
Vue.createApp(App).mount('#app')  

//Syntax -2 : To create a variable

Vue.createApp({
    data(){
        return {
            name:"I write code"
        }
    }
}).mount('#secondapp')
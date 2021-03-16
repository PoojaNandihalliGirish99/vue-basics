console.log("strawberry")
const App = {
    data(){
        return {
            heading: "My favourite fruit",
            subhead: "Fresh and Juicy",
            myImg: "strawberry.png",
            url:"https://www.google.com"
        }
    }
}

Vue.createApp(App).mount('.vapp')
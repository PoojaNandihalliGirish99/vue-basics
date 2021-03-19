console.log("fruitshop under progress");

const App = {
    data(){
        return {
            holdMyItem:[],
            fruitsList :[{
                id:"pineapple",
                fruitname:"Pineapple",
                subtitle:"Ready to eat",
                price:50,
                fruitImg:"pineapple.png",
                url:"https://www.google.com",
            },{                
            id:"litchi",
            fruitname:"Litchi",
            subtitle:"Not everyone's favourite",
            price:30,
            fruitImg:"litchi.png",
            url:"https://www.google.com",
        },{                
            id:"kiwi",
            fruitname:"Kiwi",
            subtitle:"Fresh and Juicy",
            price:80,
            fruitImg:"kiwi.png",
            url:"https://www.google.com",
        }]
        }
    },
    
    computed:{
        finalBill(){  // parameters cannont be passed to functions in 'computed' unlike 'methods'
            return this.holdMyItem.reduce((accumulator, fruit) => Number(fruit.price) + accumulator)
        },  
    },
    methods:{
        addToHolder(fruit){
            this.holdMyItem.push(fruit)
        },
        
    }

}

Vue.createApp(App).mount('#vapp')
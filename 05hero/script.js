Vue.createApp({
    data(){
        return {
            heroSelect:"",
            btsSelect:[],
            myDynamic:"",
            myVocals:[
                {text:'V', value:'Kim Taehyung'},
                {text:'Jungkook', value:'Jeon Jeongguk'},
                {text:'Jimin', value:'Park Jimin'},
            ]
        }
    }
}
).mount('#vapp')
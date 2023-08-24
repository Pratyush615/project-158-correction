AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: {default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },//const postersId = ["captain-aero","outer-space","spiderman","superman"]
        //const id = this.el.getAttribute("id")
        //console.log(this.el.getAttribute("id"),postersId.includes(id))

        
    handleMouseEnterEvents:function(){
        
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id")
            const postersId = ["cap-aero","outer-space","spiderman","superman"]
            if(postersId.includes(id)){
                const posterContainer = document.querySelector('#posters-container')
                posterContainer.setAttribute("cursor-listener",{selectedItemId:id})
                this.el.setAttribute("material",{color:"#0077CC",opacity:1})
            }
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material",{color:"white",opacity:1})
                }
            }
        })
    }

})
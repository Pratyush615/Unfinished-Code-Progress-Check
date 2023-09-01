AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: {default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
        this.handleMouseClickEvent()
    },
/*    update: function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
        //check if the infoBanner plane already has comic text info child entity
        //if so remove the child to avoid the overlapping of the text
        c = fadeBackgroundEl.children;
        if (c.length > 0) {
            var i;
            for (i=0; i <= c.length; i++) { 
                fadeBackgroundEl.removeChild(c[i]);
            }
        } 
        else {
        this.handleMouseClickEvent();
        }
    },*/
    
    handleMouseClickEvent:function(){
        console.log("e")
        //check the selected item to set the "info-banner" component on the plane
        this.el.addEventListener('click',evt=>{
            const placesContainer = document.querySelector('#posters-container')
            const {state} = placesContainer.getAttribute('comic')
            if(state==='places-list'){
                const id = this.el.getAttribute("id")
                const postersId = ["cap-aero","outer-space","spiderman","superman"]
                if(placesId.includes(id)){
                    placesContainer.setAttribute('comic',{state:'view',selectedCard:id})
                }
            }
         
        const selectedItemId = this.data.selectedItemId;
        if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true); 
        fadeBackgroundEl.setAttribute("info-banner", {
            itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursorEl.setAttribute("geometry", {
            radiusInner: 0.03,
            radiusOuter: 0.04,
        });
        } else {
        fadeBackgroundEl.setAttribute("visible", false);
        titleEl.setAttribute("visible", true);
        cursorEl.setAttribute("position", {x: 0, y: 0, z: -3 }); cursorEl.setAttribute("geometry", {
            radiusInner: 0.08,
            radiusOuter: 0.12,
        });
        }
    })
    },
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
AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "cap-aero",
          title: "Captain Aero",
          url: "./assets/captain-aero-poster.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "./assets/outer-space-poster.jpg",
        },
  
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/spiderman-poster.jpg",
        },
        {
          id: "superman",
          title: "Superman",
          url: "./assets/superman-poster.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)
        // Title Text Element
        const textEl = this.createText(position,item)
        borderEl.appendChild(textEl)

        this.placesContainer.appendChild(borderEl);
      }
    },

    createBorder: function(position,id){
        const entityEl = document.createElement('a-entity')

        entityEl.setAttribute('id',id)
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('material',{color:'white',opacity:1})
        entityEl.setAttribute('geometry',{primitive:'plane',width:23,height:30})
        entityEl.setAttribute('position',position)

        entityEl.setAttribute('cursor-listener',{})
        return entityEl
    },

    createThumbnail: function(item){
        const entityEl = document.createElement('a-entity')

        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('material',{src:item.url})
        entityEl.setAttribute('geometry',{primitive:'plane',width:21,height:28})

        entityEl.setAttribute('position',{x:0,y:0,z:0.1});
        return entityEl
    },

    createText: function(position,item){
      const entityEl = document.createElement('a-entity')
      
      entityEl.setAttribute('visible',true)
      const positionEl = position
      positionEl.y = -25
      entityEl.setAttribute('position',positionEl)
      entityEl.setAttribute('text',{font:'exo2bold',align:'center',width:70,color:'#e65100',value:item.title})
      return entityEl
    }

  });
  
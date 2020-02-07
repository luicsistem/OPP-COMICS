 export default class Comic {
    constructor(name, poster,creator ){
        this.name = name
        this.poster = poster
        this.creator = creator
        this.amateurs = []
    }

    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    
    getPoster(){
        return this.poster
    }
    setPoster(poster){
       this.poster = poster
    }
        

    getCreator(){
        return this.creator
    }
  
    setCreator(creator){
        this.creator = creator
    }

    getAmateurs(){
        return this.amateurs
    }
    setAmateurs(amateurs){
    this.amateurs = this.amateurs
    }
    
}





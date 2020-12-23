class Autopause {
    constructor() {
        this.threshold = 0.25;
        //se hace permanente el this a la instancia del objeto
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            //que porcentaje de interseccion debe tener el obj con el contenedor
            //y el lo avisa
            //humbral
            threshold: this.threshold,
        })
        observer.observe(this.player.media);        

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    handleIntersection(entries){
        const entry = entries[0];
        //console.log(entry);
        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
    handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible";
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}

export default Autopause;
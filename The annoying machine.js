const annoyer = {
    phrases:  ['literally','cray cray', 'I cant even', 'Totes!', 'YOLO', 'Cant stop, wont stop'],
    pickPhrases(){
      const {phrases} = this;
      const idx = Math.floor(Math.random() * phrases.length);
      return phrases[idx]
    },
    start(){
      setInterval(function() => {
          console.log(this.pickPhrases())
      },3000)
    },
    stop(){
      clearInterval(this.timerId);
      console.log("MAKE IT STOP!!!")
    }
  }
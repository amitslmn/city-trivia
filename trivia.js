function guessCity(capital, coastal, famous, ancient) {
     const Jerusalem = [true, false, true, true] ;
     const telaviv = [false,true,true,false];
     const arce = [false,true,false, true] ;
     const Katzrin = [false,false,false, true];
     const Zikim = [false,true,false,false];
     const Musmus= [false,false,false,false];
    
     if((Jerusalem[0] == capital)&&(Jerusalem[1] == coastal)&&(Jerusalem[2] == famous)&&(Jerusalem[3] == ancient) ){
         return "Jerusalem. No other cities are recognized." ;
     }
     else if((telaviv[0] == capital)&&(telaviv[1] == coastal)&&(telaviv[2] == famous)&&(telaviv[3] == ancient) ){
        return "Tel Aviv. No other cities are recognized." ;
    }
    else if((arce[0] == capital)&&(arce[1] == coastal)&&(arce[2] == famous)&&(arce[3] == ancient) ){
        return "arce. No other cities are recognized." ;
    }
    else if((Katzrin[0] == capital)&&(Katzrin[1] == coastal)&&(Katzrin[2] == famous)&&(Katzrin[3] == ancient) ){
        return "Katzrin. No other cities are recognized." ;
    }
    else if((Zikim[0] == capital)&&(Zikim[1] == coastal)&&(Zikim[2] == famous)&&(Zikim[3] == ancient) ){
        return "Zikim. No other cities are recognized." ;
    }
    else if((Musmus[0] == capital)&&(Musmus[1] == coastal)&&(Musmus[2] == famous)&&(Musmus[3] == ancient) ){
        return "Musmus. No other cities are recognized." ;
    }
     else{
         return "No cities are recognized."
         
     }
     console.log("No other cities are recognized.")

}
console.log(guessCity(false,true,false,false)) ;


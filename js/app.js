'use strict';

var appJs = new function () {
    this.idsArray=[
        {value:"home" ,idArr:["id1","id2","id3","id4"] },
         { value:"signup",idArr:["id5","id6","id7","id8"] },
         {value:"help",idArr:["id9","id10"] },
         {value:"news",idArr:["id11","id12","id13","id14"] },
     ];
    this.init = function () {
        console.log("init called");
        var router = new Router([
            new Route('home', 'home.html', true,"home",true),
            new Route('login', 'login.html',false,"about",true),
            new Route('news', 'news.html',false,"news",false),
            new Route('help', 'help.html',false,"help",true),
        ]);
        this.gbla =[];
        library.genrateSlector(data.cvaPositionsArray);
        // var datas =  this.name("home");
        // console.log(this.gbla);
       
    }.bind(this);

   




   

    
}
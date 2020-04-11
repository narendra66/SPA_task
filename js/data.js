var data = new function () {
    this.imagesInfo = {
        url: "https://zuehlke-careers-com.s3.amazonaws.com/career_card_images/9/1521021585494_STORY_CARD_IMAGE_9.png",
        width: "70",
        height: "70",
        position: {}
    };
    this.cvaPositionsArray = [{
       notSelect: { value: "", text: "select cva position" },
        topLeft:{ value: "topl", text: "top-left" },
       topRight: { value: "topr", text: "top_right" },
        topCenter:{ value: "topc", text: "top_center" },
        bottomLeft:{ value: "bottoml", text: "Bottom_left" },
        bottomCenter:{ value: "bottomc", text: "Bottom_center" },
        bottomRight:{ value: "bottomr", text: "Bottom_right" },
    }
    ];
    this.ChartBoatId = "chartBoartId";
    this.fingerAniId = "fingerId";
    this.cvaAnimationId="cvaAnimationId";
    this.fingerAnimJsonUrl = "https://assets1.lottiefiles.com/packages/lf20_Xm5U0Q.json";
    this. cvaAniUrl = "https://assets7.lottiefiles.com/packages/lf20_DXagd9.json";

    this.idsArray=[
        {value:"home" ,idArr:["id1","id15","id3","id4"] },
        { value:"login",idArr:["id5","id6","id7","id8"] },
        {value:"help",idArr:["id9","id10"] },
        {value:"news",idArr:["id11","id12","id13","id14"] },
    ];
    this.globalArrayId=["id1","id15","id3"];
    
    this.changeArr = function(page) {
        try {
            if (!page) {
                throw '[data js] Error: page value not found !!!'
            } else {
                var pageStr  =  page.split(".");  
                var bigCities = this.idsArray.filter(function (e) {  
                return e.value===pageStr[0] ;
            });
            this.globalArrayId = bigCities;
            console.log("[data js] global stata variable value",this.globalArrayId);
           return bigCities;
              
            }
        } catch (error) {
            console.error("[data js] Error  page not found:",error);
        }
     
    }

}
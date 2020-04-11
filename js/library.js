
var library = new function () {
    // this function create the image of cva
    this.createImage = function (url, width, height, position) {
        try {
            if (!url && !width && !height && !position) {
                throw '[Librar js] Error: some parameter mission to create cva Image'
            } else {
                var image = new Image();
                image.setAttribute("id", data.ChartBoatId);
                image.src = url;
                image.style.width = width + "px";
                image.style.height = height + "px";
                image.style.position = "absolute";
                image.style.top = position.top + "px";
                image.style.left = position.left + "px";
                image.addEventListener("click", function () {
                    this.cvaClickHandler(0);
                }.bind(this))
                image.style.zIndex = "2";
                return image;
            }
        } catch (error) {
            console.error("[library js] Erorr: to create image of cva", error)
        }

    }.bind(this);

    // this function bind the image on body
    this.bindImageOnbody = function (xYPositionOfBody) {
        try {
            if (!xYPositionOfBody || !data.imagesInfo) {
                throw '[library js] either body postion not found or image Informtion not found in data js file'
            } else {
                data.imagesInfo['position'] = xYPositionOfBody;
                var createdImg = this.createImage(data.imagesInfo['url'], data.imagesInfo['width'], data.imagesInfo['height'], data.imagesInfo['position']);
                document.body.appendChild(createdImg);
            }
        } catch (error) {
            console.error("[library js] something wrong of body postion not found ", xYPositionOfBody)
        }
    }.bind(this);

    // this function return the middle postion of any element
    this.getLeftandTopOfElemenent = function (element) {
        var elePropty = element.getBoundingClientRect();
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: elePropty.bottom - elePropty.height / 1.4 + scrollTop,
            right: parseInt(elePropty.right / 2) + scrollLeft
        };
    }

    // when the selected value chnage this fuction is called
    this.handleSelectorChangeEvent = function (ev) {
        if (document.getElementById(data.ChartBoatId)) {
            this.removeChatBoatOnbody();
        }
        var cvaPosition = this.returnCVAPosition(ev.target.value);
        this.bindImageOnbody(cvaPosition);
    }.bind(this);

    // this function remove the chartboat 
    this.removeChatBoatOnbody = function () {
        try {
            if (!data.ChartBoatId) {
                throw 'Error: chartboat animation id not found!'
            } else {
                document.getElementById(data.ChartBoatId).remove();
            }
        } catch (error) {
            console.error("[library js] element id not found erorr:", error);
        }

    }.bind(this);

    // this function create the selector on the body
    this.genrateSlector = function (passedArray) {
        try {
            if (!passedArray) {
                throw '[library js] Error: option arrary not passed in function'
            } else {
                var selector = document.createElement("SELECT");
                selector.setAttribute("id", "mySelect");
                selector.addEventListener("change", function (ev) { this.handleSelectorChangeEvent(ev) }.bind(this));
                document.body.prepend(selector);
                var optionArray = passedArray;

                for (const key in optionArray[0]) {
                    if (optionArray[0].hasOwnProperty(key)) {
                        const element = optionArray[0][key];
                        var opt = new Option(element.text, element.value);
                        selector.appendChild(opt);
                    }
                }
            }
        } catch (error) {
            console.error("[library js] option arrary not passed", error)
        }

    }.bind(this);

    // this function returns the cva position by selected value
    this.returnCVAPosition = function (selectedValue) {
        var mybody = document.getElementsByTagName("BODY")[0];
        var eleBody = mybody.getBoundingClientRect();
        try {
            switch (selectedValue) {
                case data.cvaPositionsArray[0]['topLeft']['value']:
                    return { top: eleBody.top, left: eleBody.left };
                case data.cvaPositionsArray[0]['topRight']['value']:
                    return { top: eleBody.top, left: eleBody.right - 50 };
                case data.cvaPositionsArray[0]['topCenter']['value']:
                    return { top: eleBody.top, left: eleBody.width / 2.2 };
                case data.cvaPositionsArray[0]['bottomLeft']['value']:
                    return { top: eleBody.bottom, left: eleBody.top };
                case data.cvaPositionsArray[0]['bottomCenter']['value']:
                    return { top: eleBody.bottom, left: eleBody.right / 2.2 };
                case data.cvaPositionsArray[0]['bottomRight']['value']:
                    return { top: eleBody.bottom, left: eleBody.right - 50 };
                default:
                    break;
            }
        } catch (error) {
            console.error(error);
        }

    }
    // this function runs when chatBoat clicked
    this.cvaClickHandler = function (i) {
        var idsArray = data.globalArrayId[0]['idArr'];
        try {
            if (!data.globalArrayId[0]['idArr']) {
                throw '[library js] Erorr: global id array not found'
            } else {
                if (idsArray[i]) {
                    setTimeout(function () {
                        console.log("[library js] func when in cva Clicked");
                        this.createFingerAnimation(idsArray[i]);
                        this.createCvaAnimation();
                        this.cvaClickHandler(i + 1);
                    }.bind(this), 1500);
                    // remove the finger animation after 3 secs
                    setTimeout(function () {
                        this.removeFingerAnimation();
                        this.removeCvaAnimation();
                    }.bind(this), 3000);
                }
            }

        } catch (error) {
            console.error("[library ] error when cva Clicked:", error);
        }
    }.bind(this);
    // this function create finger animation 
    this.createFingerAnimation = function (elementId) {
        try {
            if (!elementId) {
                throw 'Erorr: element id not found!!';
            } else {
                var elementOfPage = document.getElementById(elementId);
                var positionsOfFingerAnim = this.getLeftandTopOfElemenent(elementOfPage);
                var parentofElement = document.getElementById(elementId).parentNode;
                var lottieImage = this.createILottlieImages(positionsOfFingerAnim, data.fingerAnimJsonUrl, data.fingerAniId);
                parentofElement.insertBefore(lottieImage, elementOfPage);
            }
        } catch (error) {
            console.error("[library js]  element id not found!!:", error)
        }

    }
    // this function create cva Animation 
    this.createCvaAnimation = function () {
        try {
            if (!data.ChartBoatId || !data.cvaAniUrl || !data.cvaAnimationId) {
                throw '[library js] Error: either chartBoat  id not found! or cva Animation url not found!!'
            } else {
                var cvaElement = document.getElementById(data.ChartBoatId);
                var cvaParent = cvaElement.parentNode;
                positionOfAni = cvaElement.getBoundingClientRect();
                var positionOf = { top: positionOfAni.top, right: positionOfAni.right - positionOfAni.width };
                var lottieImage = this.createILottlieImages(positionOf, data.cvaAniUrl, data.cvaAnimationId);
                cvaParent.insertBefore(lottieImage, cvaElement);
            }
        } catch (error) {
            console.error("[library js]cvaId id not found or cva animation Url erorr:", error);
        }
    }.bind(this);

    // finger animation remove
    this.removeFingerAnimation = function () {
        try {
            if (!data.fingerAniId) {
                throw 'Error: finger animation id not found!'
            } else {
                document.getElementById(data.fingerAniId).remove();
            }
        } catch (error) {
            console.error("[library js] element id not found erorr:", error);
        }

    }

    // cva Animation remove
    this.removeCvaAnimation = function () {
        try {
            if (!data.ChartBoatId) {
                throw 'Error: chartboat animation id not found!'
            } else {
                document.getElementById(data.cvaAnimationId).remove();
            }
        } catch (error) {
            console.error("[library js] element id not found erorr:", error);
        }

    }
    // this function genrate lottie images
    this.createILottlieImages = function (positions, url, id) {
        try {
            if (!positions || !url || !id) {
                throw 'Error: paramter of lottlie image missing erorr!!'
            } else {
                lottieImg = document.createElement("lottie-player");
                lottieImg.src = url
                lottieImg.setAttribute("id", id);
                lottieImg.addEventListener("click", function () { });
                lottieImg.style.position = "absolute";
                lottieImg.style.width = data.imagesInfo['width'] + "px";
                lottieImg.style.height = data.imagesInfo['height'] + "px";
                lottieImg.style.top = positions.top + "px";
                lottieImg.style.left = positions.right + "px";
                lottieImg.style.borderRadius = "50%";
                lottieImg.style.zIndex = "3";
                lottieImg.style.background = "transparent";
                lottieImg.setAttribute("loop", "true");
                lottieImg.setAttribute("autoplay", "true");
                return lottieImg;
            }
        } catch (error) {
            console.error("[library js] some parameter not found!!", error)
        }
    }
}

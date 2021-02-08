const getById = (myId) => {
    return document.getElementById(myId);
}

let jerseyValue = {
    jerseyColor:"black",
    teamName:"Teamname9",
    teamNameFont:"E-Team-1",
    teamNameColor:"#ffffff",
    teamNameBorder:"#6D6D6D",
    teamNameSize:0,
    teamNamePositionY:0,
    teamNum:"23",
    teamNumFont:"Num-1",
    teamNumColor:"#ffffff",
    teamNumBorder:"#6D6D6D",
    teamNumSize:0,
    teamNumPositionX:0,
    teamNumPositionY:0,
    playerName:"PLAYERNAME",
    playerNameFont:"E-Player-1",
    playerNameColor:"#ffffff",
    playerNameSize:0,
    playerNamePositionY:0,
    imgSrc:"",
};

let jerseyValueTemp = { ...jerseyValue };

// let jerseyValueTemp = {
//     jerseyColor:"black",
//     teamName:"Teamname9",
//     teamNameFont:"E-Team-1",
//     teamNameColor:"#ffffff",
//     teamNameBorder:"#6D6D6D",
//     teamNameSize:0,
//     teamNamePositionY:0,
//     teamNum:"23",
//     teamNumFont:"Num-1",
//     teamNumColor:"#ffffff",
//     teamNumBorder:"#6D6D6D",
//     teamNumSize:0,
//     teamNumPositionX:0,
//     teamNumPositionY:0,
//     playerName:"PLAYERNAME",
//     playerNameFont:"E-Player-1",
//     playerNameColor:"#ffffff",
//     playerNameSize:0,
//     playerNamePositionY:0,
//     imgSrc:"",
// };

function setValue() {
    teamName.innerText = jerseyValue['teamName'];
    teamName.setAttribute('data-name',jerseyValue['teamName']);
    teamName.style.fontFamily = jerseyValue['teamNameFont'];
    teamName.style.color = jerseyValue['teamNameColor'];
    let teamNameNewSize = parseInt(myTeamnameSize) + parseInt(jerseyValue['teamNameSize']/5) + "px";
    teamName.style.fontSize = teamNameNewSize;
    teamName.style.setProperty('--teamNameBorder', jerseyValue['teamNameBorder']);
    let teamNameNewPosition = parseInt(myTeamnamePosition) + parseInt(jerseyValue['teamNamePositionY']/5) + "px";
    teamName.style.top = teamNameNewPosition;
    mynumber.style.fontFamily = jerseyValue['teamNumFont'];
    mynumber.innerText = jerseyValue['teamNum'];
    mynumber.setAttribute('data-num',jerseyValue['teamNum']);
    mynumberBack.innerText = jerseyValue['teamNum'];
    mynumberBack.setAttribute('data-num',jerseyValue['teamNum']);
    let teamNumNewSize = parseInt(myTeamnumSize) + parseInt(jerseyValue['teamNumSize']/5) + "px";
    mynumber.style.fontSize = teamNumNewSize;
    let NumNewPositionY = parseInt(myTeamnumPositionY) + parseInt(jerseyValue['teamNumPositionY']/5) + "px";
    mynumber.style.top = NumNewPositionY;
    let NumNewPositionX = parseInt(myTeamnumPositionX) + parseInt(jerseyValue['teamNumPositionX']) + "px";
    mynumber.style.left = NumNewPositionX;
    mynumber.style.color = jerseyValue['teamNumColor'];
    mynumberBack.style.color = jerseyValue['teamNumColor'];
    mynumber.style.setProperty('--teamNumBorder', jerseyValue['teamNumBorder']);
    mynumberBack.style.setProperty('--teamNumBorder', jerseyValue['teamNumBorder']);
    playerName.style.fontFamily = jerseyValue['playerNameFont'];
    playerName.innerText = jerseyValue['playerName'];
    playerName.style.color = jerseyValue['playerNameColor'];
    let playerNameNewSize = parseInt(myPlayerNameSize) + parseInt(jerseyValue['teamNameSize']/5) + "px";
    playerName.style.fontSize = playerNameNewSize;
    let playerNameNewPositionY = parseInt(myPlayerPositionY) + parseInt(jerseyValue['playerNamePositionY']/5) + "px";
    playerName.style.top = playerNameNewPositionY;
    colorChange(jerseyValue['jerseyColor']);
    if(jerseyValue['imgSrc'] == ""){ 
        teamLogo_img.style.visibility='hidden';
    } else {
        teamLogo_img.setAttribute("src",jerseyValue['imgSrc']);
        teamLogo_img.style.visibility='visible';
        }
    }

let myTeamnameSize = window.getComputedStyle(getById('teamName')).getPropertyValue('font-size');
let myTeamnamePosition = window.getComputedStyle(getById('teamName')).getPropertyValue('top');
let myTeamnumSize = window.getComputedStyle(getById('mynumber')).getPropertyValue('font-size');
let myTeamnumPositionY = window.getComputedStyle(getById('mynumber')).getPropertyValue('top');
let myTeamnumPositionX = window.getComputedStyle(getById('mynumber')).getPropertyValue('left');
let myPlayerNameSize = window.getComputedStyle(getById('playerName')).getPropertyValue('font-size');
let myPlayerPositionY = window.getComputedStyle(getById('playerName')).getPropertyValue('top');


//輸入隊名
teamNameInput.oninput = function() {
    jerseyValueTemp['teamName'] = teamNameInput.value;
    teamName.innerText = jerseyValueTemp['teamName'];
    teamName.setAttribute('data-name',jerseyValueTemp['teamName']);
}

//隊名字體
teamNameFont.onchange = function () {
    jerseyValueTemp['teamNameFont'] = teamNameFont.value ;
    teamName.style.fontFamily = jerseyValueTemp['teamNameFont'];
}

//隊名尺寸
sizeRange.oninput = function() {
    jerseyValueTemp['teamNameSize'] = this.value ;
    let newSize = parseInt(myTeamnameSize) + parseInt(jerseyValueTemp['teamNameSize']/5) + "px";
    teamName.style.fontSize = newSize;
  }

//隊名位置
positionRange.oninput = function() {
    jerseyValueTemp['teamNamePositionY'] = this.value ;
    let newPosition = parseInt(myTeamnamePosition) + parseInt(jerseyValueTemp['teamNamePositionY']/5) + "px";
    teamName.style.top = newPosition;
}

//隊名顏色
teamNameColor.oninput = function() {
    jerseyValueTemp['teamNameColor'] = teamNameColor.value;
    teamName.style.color = jerseyValueTemp['teamNameColor'];
}

//隊名邊框顏色
borderColor.oninput = function() {
    jerseyValueTemp['teamNameBorder'] = borderColor.value;
    teamName.style.setProperty('--teamNameBorder', jerseyValueTemp['teamNameBorder']);
}

//輸入號碼
teamNumInput.oninput = function() {
    jerseyValueTemp['teamNum'] = teamNumInput.value;
    mynumber.innerText = jerseyValueTemp['teamNum'];
    mynumber.setAttribute('data-num',jerseyValueTemp['teamNum']);
    mynumberBack.innerText = jerseyValueTemp['teamNum'];
    mynumberBack.setAttribute('data-num',jerseyValueTemp['teamNum']);
}

//號碼字體
teamNumFont.onchange = function () {
    jerseyValueTemp['teamNumFont'] = teamNumFont.value ;
    mynumber.style.fontFamily = jerseyValueTemp['teamNumFont'];
    mynumberBack.style.fontFamily = jerseyValueTemp['teamNumFont'];

}

//號碼尺寸
numsizeRange.oninput = function() {
    jerseyValueTemp['teamNumSize'] = this.value ;
    let newSize = parseInt(myTeamnumSize) + parseInt(jerseyValueTemp['teamNumSize']/5) + "px";
    mynumber.style.fontSize = newSize;
  }

//號碼位置
numpositionYRange.oninput = function() {
    jerseyValueTemp['teamNumPositionY'] = this.value ;
    let newPosition = parseInt(myTeamnumPositionY) + parseInt(jerseyValueTemp['teamNumPositionY']/5) + "px";
    mynumber.style.top = newPosition;
}
numpositionXRange.oninput = function() {
    jerseyValueTemp['teamNumPositionX'] = this.value ;
    let newPosition = parseInt(myTeamnumPositionX) + parseInt(jerseyValueTemp['teamNumPositionX']) + "px";
    mynumber.style.left = newPosition;
}

//號碼顏色
teamNumColor.oninput = function() {
    jerseyValueTemp['teamNumColor'] = teamNumColor.value;
    mynumber.style.color = jerseyValueTemp['teamNumColor'];
    mynumberBack.style.color = jerseyValueTemp['teamNumColor'];
}

//號碼邊框顏色
numBorderColor.oninput = function() {
    jerseyValueTemp['teamNumBorder'] = numBorderColor.value;
    mynumber.style.setProperty('--teamNumBorder', jerseyValueTemp['teamNumBorder']);
    mynumberBack.style.setProperty('--teamNumBorder', jerseyValueTemp['teamNumBorder']);
}

//輸入姓名
jerseyNameInput.oninput = function() {
    jerseyValueTemp['playerName'] = jerseyNameInput.value;
    playerName.innerText = jerseyValueTemp['playerName'];
}

//姓名字體
playerNameFont.onchange = function () {
    jerseyValueTemp['playerNameFont'] = playerNameFont.value ;
    playerName.style.fontFamily = jerseyValueTemp['playerNameFont'];
}

//姓名尺寸
namesizeRange.oninput = function() {
    jerseyValueTemp['teamNameSize'] = this.value ;
    let newSize = parseInt(myPlayerNameSize) + parseInt(jerseyValueTemp['teamNameSize']/5) + "px";
    playerName.style.fontSize = newSize;
  }

//姓名顏色
jerseyNameColor.oninput = function() {
    jerseyValueTemp['playerNameColor'] = jerseyNameColor.value;
    playerName.style.color = jerseyValueTemp['playerNameColor'];
}

//姓名位置
namepositionYRange.oninput = function() {
    jerseyValueTemp['playerNamePositionY'] = this.value ;
    let newPosition = parseInt(myPlayerPositionY) + parseInt(jerseyValueTemp['playerNamePositionY']/5) + "px";
    playerName.style.top = newPosition;
}

//球衣換色
function colorChange(color){
    switch (color) {
        case 'black':
            frontColor.style.WebkitFilter ='';
            backColor.style.WebkitFilter ='';
            frontColor.style.mixBlendMode = "normal";
            backColor.style.mixBlendMode = "normal";
            break;

        case 'white':
            frontColor.style.WebkitFilter ='invert(100%)';
            frontColor.style.mixBlendMode = "normal";
            backColor.style.WebkitFilter ='invert(100%)';
            backColor.style.mixBlendMode = "normal";
            break;

        case 'blue':
            frontColor.style.WebkitFilter ='invert(32%) sepia(150%) saturate(773%) hue-rotate(545deg) brightness(101%) contrast(112%)';
            frontColor.style.mixBlendMode ='soft-light';
            backColor.style.WebkitFilter ='invert(32%) sepia(150%) saturate(773%) hue-rotate(545deg) brightness(101%) contrast(112%)';
            backColor.style.mixBlendMode ='soft-light';
            break;

        case 'purple':
            frontColor.style.WebkitFilter ='invert(32%) sepia(150%) saturate(773%) hue-rotate(600deg) brightness(101%) contrast(112%)';
            frontColor.style.mixBlendMode ='soft-light';
            backColor.style.WebkitFilter ='invert(32%) sepia(150%) saturate(773%) hue-rotate(600deg) brightness(101%) contrast(112%)';
            backColor.style.mixBlendMode ='soft-light';
            break;

        case 'red':
            frontColor.style.WebkitFilter ='invert(23%) sepia(100%) saturate(657%) hue-rotate(689deg) brightness(77%) contrast(180%)';
            frontColor.style.mixBlendMode ='soft-light';
            backColor.style.WebkitFilter ='invert(23%) sepia(100%) saturate(657%) hue-rotate(689deg) brightness(77%) contrast(180%)';
            backColor.style.mixBlendMode ='soft-light';
            break;

        case 'yellow':
            frontColor.style.WebkitFilter ='invert(32%) sepia(100%) saturate(773%) hue-rotate(365deg) brightness(162%) contrast(112%)';
            frontColor.style.mixBlendMode ='lighten';
            backColor.style.WebkitFilter ='invert(32%) sepia(100%) saturate(773%) hue-rotate(365deg) brightness(162%) contrast(112%)';
            backColor.style.mixBlendMode ='lighten';
            break;

        case 'forest':
            frontColor.style.WebkitFilter ='invert(97%) sepia(207%) saturate(348%) hue-rotate(414deg) brightness(77%) contrast(93%)';
            frontColor.style.mixBlendMode ='soft-light';
            backColor.style.WebkitFilter ='invert(97%) sepia(207%) saturate(348%) hue-rotate(414deg) brightness(77%) contrast(93%)';
            backColor.style.mixBlendMode ='soft-light';
            break;

        case 'lake':
            frontColor.style.WebkitFilter ='invert(97%) sepia(100%) saturate(348%) hue-rotate(479deg) brightness(105%) contrast(93%)';
            frontColor.style.mixBlendMode ='soft-light';
            backColor.style.WebkitFilter ='invert(97%) sepia(100%) saturate(348%) hue-rotate(479deg) brightness(105%) contrast(93%)';
            backColor.style.mixBlendMode ='soft-light';
            break;
            
        default:
            break;
    }
    
    jerseyValueTemp['jerseyColor'] = color ;

}


getById('colorBlack').addEventListener("click",function(){colorChange('black')});

getById('colorWhite').addEventListener("click",function(){colorChange('white')});

getById('colorBlue').addEventListener("click",function(){colorChange('blue')});

getById('colorPurple').addEventListener("click",function(){colorChange('purple')});

getById('colorRed').addEventListener("click",function(){colorChange('red')});

getById('colorYellow').addEventListener("click",function(){colorChange('yellow')});

getById('colorForest').addEventListener("click",function(){colorChange('forest')});

getById('colorLake').addEventListener("click",function(){colorChange('lake')});


function selectBtn(category){
    selects.style.left = "600px";
    setTimeout(function(){
        selects.style.display = "none";
        category.style.left = 0;
    },200);
    if(category == jerseyName){
        myjerseyBack.style.display = "block";
        myjerseyFront.style.display = "none";
        back.style.backgroundColor = "rgb(90, 90, 90)";
        front.style.backgroundColor = "rgb(192, 192, 192)";
        setTimeout(function () {
            myjerseyBack.style.transform = "scale(2)";
        },100);
    }else{
        myjerseyBack.style.display = "none";
        myjerseyFront.style.display = "block";
        front.style.backgroundColor = "rgb(90, 90, 90)";
        back.style.backgroundColor = "rgb(192, 192, 192)";
        switch (category) {
            case jerseyColor:
                break;

            case jerseyLogo:
                myjerseyFront.style.transformOrigin = "center 50px";
                setTimeout(function () {
                    myjerseyFront.style.transform = "scale(2)";
                },100)
                break;

            default:
                myjerseyFront.style.transformOrigin = "center 200px";
                setTimeout(function () {
                    myjerseyFront.style.transform = "scale(2)";
                },100)
                break;
        }
    }
}

function confirmClick(category){
    category.style.left = "600px";
    myjerseyFront.style.transform = "scale(1)";
    myjerseyBack.style.transform = "scale(1)";
    setTimeout(function(){
        selects.style.display = "block";
        setTimeout(function(){
            selects.style.left = 0;
        },100);
    },200);
    jerseyValue = Object.assign({}, jerseyValue, jerseyValueTemp);
}

function cancleClick(category){
    category.style.left = "600px";
    myjerseyFront.style.transform = "scale(1)";
    myjerseyBack.style.transform = "scale(1)";
    setTimeout(function(){
        selects.style.display = "block";
        setTimeout(function(){
            selects.style.left = 0;
        },100);
    },200);
    setValue();
    if (category==jerseyLogo){
    logoinput.value="";}
}



front.addEventListener("click", function() {
    myjerseyBack.style.display = "none";
    myjerseyFront.style.display = "block";
    front.style.backgroundColor = "rgb(90, 90, 90)";
    back.style.backgroundColor = "rgb(192, 192, 192)";
  });
back.addEventListener("click", function() {
    myjerseyBack.style.display = "block";
    myjerseyFront.style.display = "none";
    back.style.backgroundColor = "rgb(90, 90, 90)";
    front.style.backgroundColor = "rgb(192, 192, 192)";
  });

// 上傳Logo
function readURL(input){
    
    if (input.files && input.files[0]){
      let imageTagID = input.getAttribute("targetID");

      let reader = new FileReader();
      // 刪除child
      let child = logoImg.lastElementChild;
      while (child) {
        logoImg.removeChild(child);
        child = logoImg.lastElementChild;
      }
      // ?????
      reader.onload = function (e) {
         
         let img = document.createElement("img");
         jerseyValueTemp['imgSrc'] = e.target.result;
         img.setAttribute("id", imageTagID);
         img.setAttribute("src",jerseyValueTemp['imgSrc']);
         logoImg.appendChild(img);
         teamLogo_img.style.visibility="visible";
      }
  
      reader.readAsDataURL(input.files[0]);
    }

  }

function clearLogo(){
    teamLogo_img.setAttribute("src","");
    teamLogo_img.style.visibility="hidden";
    jerseyValueTemp['imgSrc']="";
}

ham.addEventListener("click",function(){
    document.getElementById('boxRight').classList.toggle('onoff');
})

ham.addEventListener("click",function(){
    document.getElementById('ox').classList.toggle('ooxx');
})
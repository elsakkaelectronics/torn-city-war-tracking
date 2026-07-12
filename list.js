
var userapi=''
var factionid='49872'
var enemyid=''
var api='ii6sQ0r9vb85vqRE'
var userstats={}
var total=0
var ctrl=0

var url = "https://api.torn.com/faction/"+factionid+"?selections=basic&key="+api

var get = async function(){var response = await fetch(url)
    data = await response.json()
    var enemyobject=data.members
    var enemylist = []
    for(var[key,value] of Object.entries(enemyobject)){enemylist.push(value)} 
    alert(enemylist[0].name)
    //enemylist.forEach()
var HTML =  ""

var list = function(){
card=function(id , name , level , status , time){ html = "<div id="+id+" class='card' style='height:100px;width:inherit;display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:grey;color:white;'><span>"+name+"</span><span>"+level+"</span><span>"+status+"</span></div>"
return html
}

HTML=""
enemylist.forEach(enemy=>{
    HTML += card(ctrl , enemy.name , enemy.level, enemy.status.description  );

});document.getElementById("list").innerHTML=HTML


}
setInterval(list,1000)
return data , enemyobject , enemylist
} 
setInterval(get(),1000)
   
         




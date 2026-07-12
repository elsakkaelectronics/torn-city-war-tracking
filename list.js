
var userapi=''
var factionid=''
var enemyid=''
var api=''
var userstats={}
var total=0
var ctrl=0
var enemylist=[
    {
        name:'enemy',
        level:15,
        status:'ok',
        time:0
    }
]
card=function(id , name , level , status , time){html="<div id=id class='card' style='height:100px;width:inherit;display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:grey;color:white;'><span>"+name+"</span><span>"+level+"</span><span>"+status+"</span><span>"+time+"</span>";
return html;}
var HTML=''
enemylist.forEach(enemy=>{
    HTML += card(ctrl , enemy.name , enemy.level, enemy.status , enemy.time );

})
console.log(HTML)
module.exports.HTML = HTML
module.exports.card = card()

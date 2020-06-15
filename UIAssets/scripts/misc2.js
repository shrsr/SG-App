  var myepg 
  var option
  var val =[]
  var dn = []
   function selection(value,parent) {
      
      var tenantEPG = [];
      var rep = 0;
      var IP = $.xResponse("/api/node/class/fvCEp.json");
      for (var r = 0; r < IP.imdata.length; r++) {
        if (
          IP.imdata[r].fvCEp.attributes.ip == value
        ) {
          tenantEPG[rep] =
            IP.imdata[r].fvCEp.attributes.dn.split(/[/]/)[1].replace("tn-", "") +" | "+
            IP.imdata[r].fvCEp.attributes.dn.split(/[/]/)[2].replace("ap-", "") +" | "+
            IP.imdata[r].fvCEp.attributes.dn.split(/[/]/)[3].replace("epg-","");
          dn[rep] = IP.imdata[r].fvCEp.attributes.dn.split("/cep-")[0]
          rep++;
        }
      }
      var myParent = document.getElementById(parent);
      myParent.innerHTML=""
      if (tenantEPG.length > 1) {
       var cl1= document.createElement("div")
        cl1.className = "form-group active dropdown"
        cl1.id="cl1" + parent
        var cl2= document.createElement("div")
        cl2.className = "form-group__text select"
        myParent.append(cl1)
        cl1.append(cl2)
        var inp = document.createElement("input")
        inp.id = "mySelect" + parent
        inp.setAttribute("readonly","")
       
        inp.value="Select Endpoint"
       
          
        cl2.append(inp);
        cl2.parent = parent
        cl2.onclick = function(){onclickShowList(this.parent)}
        var di = document.createElement("div")
        di.className = "dropdown__menu"
        for (var c = 0; c < tenantEPG.length; c++) {
          option = document.createElement("a");
          option.value = tenantEPG[c];
          val[c] = this.value
          option.text = tenantEPG[c];
          option.dn = dn[c]
          option.parent = parent
          option.onclick = function(){onclickRemoveList(this.value,this.parent,this.dn)}
          
          di.append(option);
        }
    cl1.append(di)
    }
  }
var inp 
function onclickRemoveList(value,parent,dn){
var cl1 = document.getElementById("cl1" + parent)
cl1.classList.remove("active")
inp = document.getElementById("mySelect" + parent)
inp.value = value
inp.dn = dn
return inp.value
}



function onclickShowList(parent){
  var cl1 = document.getElementById("cl1" + parent)
  cl1.classList.add("active")
  
  }

 
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
$(function () {
  var d1 = $("#d1");
  var d2 = $("#d2");
  for (let index = 0; index < 50; index++) {
    d1.append('<div id="do' + index + '" style="height: 1%;"></div>');
    d2.append('<div id="dt' + index + '" style="height: 1%;"></div>');
  }
  
  for (let index = 0; index < 50; index++) {
    var rds=Math.ceil(Math.random()*99);
    th(index,rds*100,3.0-index*0.0005+rds/1000000,"do");
  }
  let j=0;
  for (let index = 50; index > -1; index--) {
    var rds=Math.ceil(Math.random()*99);
    th(index,rds*100,3.0-j*0.0005+rds/1000000,"dt");
    j++;
  }
});
async function th(idd, timing,sp,dn) {
  await sleep(timing);
  while (true) {
     sp+=Math.ceil(Math.random()*99)/1000000;
    await sleep(0.1);
    var dotmp = $("#"+ dn + idd);
    var heighttmp = dotmp.height();
    heighttmp += sp;
    dotmp.height(heighttmp);
    if (dotmp.height() > $("#d1").height()/1.3) {
      break;
    }
  }
sp+=Math.ceil(Math.random()*99)/1000000;
  thb(idd,timing,sp,dn);
}

async function thb(idd, timing,sp,dn) {
    while (true) {
sp+=Math.ceil(Math.random()*99)/1000000;
      await sleep(0.1);
      var dotmp = $("#"+ dn + idd);
      var heighttmp = dotmp.height();
      heighttmp -= sp;
      dotmp.height(heighttmp);
      if (dotmp.height()<$("#d1").height()/10) {
        break;
      }
    }
sp+=Math.ceil(Math.random()*99)/1000000;
    thg(idd,timing,sp,dn);
}

async function thg(idd, timing,sp,dn) {
    while (true) {
sp+=Math.ceil(Math.random()*99)/1000000;
      await sleep(0.1);
      var dotmp = $("#"+ dn + idd);
      var heighttmp = dotmp.height();
      heighttmp += sp;
      dotmp.height(heighttmp);
      if (dotmp.height() > $("#d1").height()/1.3) {
        break;
      }
    }
sp+=Math.ceil(Math.random()*99)/1000000;
    thb(idd,timing,sp,dn);
  }

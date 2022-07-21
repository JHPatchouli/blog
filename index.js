const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
$(function () {
  var d1 = $("#d1");
  var d2 = $("#d2");
  for (let index = 0; index < 20; index++) {
    d1.append('<div id="do' + index + '" style="height: 1%;"></div>');
    d2.append('<div id="dt' + index + '" style="height: 1%;"></div>');
  }
  for (let index = 0; index < 20; index++) {
    th(index,index*500,1-index*0.0005,"do");
  }
  let j=0;
  for (let index = 20; index > -1; index--) {
    th(index,j*500,1-j*0.0005,"dt");
    j++;
  }
});
async function th(idd, timing,sp,dn) {
  await sleep(timing);
  while (true) {
    await sleep(0.1);
    var dotmp = $("#"+ dn + idd);
    var heighttmp = dotmp.height();
    heighttmp += sp;
    dotmp.height(heighttmp);
    if (dotmp.height() > $("#d1").height()) {
      break;
    }
  }
  thb(idd,timing,sp,dn);
}

async function thb(idd, timing,sp,dn) {
    while (true) {
      await sleep(0.1);
      var dotmp = $("#"+ dn + idd);
      var heighttmp = dotmp.height();
      heighttmp -= sp;
      dotmp.height(heighttmp);
      if (dotmp.height()<$("#d1").height()/10) {
        break;
      }
    }
    thg(idd,timing,sp,dn);
}

async function thg(idd, timing,sp,dn) {
    while (true) {
      await sleep(0.1);
      var dotmp = $("#"+ dn + idd);
      var heighttmp = dotmp.height();
      heighttmp += sp;
      dotmp.height(heighttmp);
      if (dotmp.height() > $("#d1").height()) {
        break;
      }
    }
    thb(idd,timing,sp,dn);
  }

//creates a var that is an infinite 60 minute alarm
var x = 60;
var hourAlarm = chrome.alarms.create("Interrogation, you better be doing your work >:(", {delayInMinutes: x, periodInMinutes: x});
//creates a function that handles the hourAlarm
function handleAlarm(alarmInfo) {
  alert();
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;

  open('checkin.html', 'test', params);
}

//listener for the going offage of the hourAlarm
chrome.alarms.onAlarm.addListener(handleAlarm);

//creates a function that will yell at us when the url changes for the current open tab
function handleUpdated(tabId, changeInfo) {
  if (changeInfo.url) {
    alert(changeInfo.url);
  };
}

function scrape() {
  chrome.tabs.executeScript(null, {
    code: "document.body.innerText"
  }, function (body) {
    var good_obj = {};
    var good = "linear,calculus,algebra,polynomials,fraction,derivative,latex,programing,functions,lectures,theorem,science,physics,chemistry,biology,english,novel,poem,studies,film studies,social studies,history,world war one,world war two,imperialism,globalisation,nationalism,biography,calculator,stackoverflow,d2l,wikipedia,zoom,ted talk,stocks,seminar,tutorial,mathematics,arithmetic,multiplication,division,addition,subtraction,linear algebra,calculus,integration,derivatives,partial,change,rate,vector,function,integral,calculate,calculator,proton,electron,quark,gluon,fermion,boson,quantum computing,quantum,motion,force,energy,momentum,relativitiy,special,general,latex,exchange,transfer,days,programming,mutability,memoization,counting,coding,program,runtime,python,javascript,java,stackoverflow,database,server,linux,music,learning,strategies,habits,ideas,responsibility,studying,study,work,learn,habits,build,building,ingenuity,intuition,quiz,test,assignment,due,date,written,wikipedia,freecodecamp,wolfram,alpha,wolframalpha,symbolab,d2l".split(',');

    good.forEach(str => { if (str in good_obj) { good_obj[str] += 1 } else { good_obj[str] = 1 } });

    var good_var = 1;

    var bad_obj = {};
    var bad = "minecraft,adventure,action,rpg,puzzle,maze,quest,zombie,apocalypse,horror,drama,romance,mecha,mario,anime,manga,naruto,among,ninja,xqc,twitch,beast,games,gaming,fandom,league,legends,apex,legends,netflix,uber,amazon,minecraft,microsoft,google,facebook,nintendo,youtube,yahoo,discord,spotify,soundcloud,instagram,snapchat,netflix,uber,amazon,minecraft,microsoft,google,facebook,nintendo,youtube,yahoo,discord,spotify,soundcloud,instagram,snapchat,netflix,uber,amazon,minecraft,microsoft,google,facebook,nintendo,youtube,yahoo,discord,spotify,soundcloud,instagram,snapchat,xqc,ninja,trump,clinton,pewdiepie,xqc,ninja,trump,clinton,pewdiepie,entertainment,porn,anime,hentai,distraction,news,games,gaming,game,yandere,speedrun,ban,record,trendy,trend,trends,like,follow,subscribe,engage,buy,promotional,promoting,promote,rapper,rapping,influence,influencer,deal,savings,troll,trolling".split(',');

    bad.forEach(str => { if (str in bad_obj) { bad_obj[str] += -1 } else { bad_obj[str] = -1 } });

    var bad_var = -1;

    var stuff = {};

    //the issue
    document.body.innerText.split(/[ \n]/).map(element => element.toLowerCase()).forEach(element => {
        if (good.includes(element)) {
            if (element in stuff) {
                stuff[element] += good_obj[element];
            } else {
                stuff[element] = good_var;
            };
        } else if (bad.includes(element)) {
            if (element in stuff) {
                stuff[element] += bad_obj[element];
            } else {
                stuff[element] = bad_var;
            };
        }
    });

    var values = Object.values(stuff);
    if (values.length == 0) {
      sum = 0;
      alert("website rated as: " + sum)
    }else {
      var sum = values.reduce((a,b) => a+b);
      alert(`website rated as: ${sum / values.length}`);
      
    }
    
    // alert(stuff);
    // console.log(stuff);
    // alert(`${values}`);
    // var page_rank = values.map(s => s/sum).reduce((a,b) => a+b);
    
  });
  
}

// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.executeScript(tab.id, {
//     file: "scraping.js",
//   }, function() {
//       if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError.message);
//     }
//   });
// })

function callScrape(tabId, changeInfo) {
  if (changeInfo.url) {

    //var string = document.documentElement.innerHTML;
    //alert(string);
    scrape();
  }
}

//add a listener for when the url is changed
chrome.tabs.onUpdated.addListener(callScrape);
//chrome.tabs.onUpdated.addListener(handleUpdated);

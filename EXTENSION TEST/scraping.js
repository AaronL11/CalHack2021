var good_obj = {};
var good = "linear,calculus,algebra,polynomials,fraction,derivative,latex,programing,functions,lectures,theorem,science,physics,chemistry,biology,english,novel,poem,studies,film studies,social studies,history,world war one,world war two,imperialism,globalisation,nationalism,biography,calculator,stackoverflow,d2l,wikipedia,zoom,ted talk,stocks,seminar,tutorial,mathematics,arithmetic,multiplication,division,addition,subtraction,linear algebra,calculus,integration,derivatives,partial,change,rate,vector,function,integral,calculate,calculator,proton,electron,quark,gluon,fermion,boson,quantum computing,quantum,motion,force,energy,momentum,relativitiy,special,general,latex,exchange,transfer,days,programming,mutability,memoization,counting,coding,program,runtime,python,javascript,java,stackoverflow,database,server,linux,music,learning,strategies,habits,ideas,responsibility,studying,study,work,learn,habits,build,building,ingenuity,intuition,quiz,test,assignment,due,date,written,wikipedia,freecodecamp,wolfram,alpha,wolframalpha,symbolab,d2l".split(',');

good.forEach(str => { if (str in good_obj) { good_obj[str] += 1 } else { good_obj[str] = 1 } });

var good_var = 1;

var bad_obj = {};
var bad = "minecraft,adventure,action,rpg,puzzle,maze,quest,zombie,apocalypse,horror,drama,romance,mecha,mario,anime,manga,naruto,among,ninja,xqc,twitch,beast,games,gaming,fandom,league,legends,apex,legends,netflix,uber,amazon,minecraft,microsoft,google,facebook,nintendo,youtube,yahoo,discord,spotify,soundcloud,instagram,snapchat,netflix,uber,amazon,minecraft,microsoft,google,facebook,nintendo,youtube,yahoo,discord,spotify,soundcloud,instagram,snapchat,netflix,uber,amazon,minecraft,microsoft,google,facebook,nintendo,youtube,yahoo,discord,spotify,soundcloud,instagram,snapchat,xqc,ninja,trump,clinton,pewdiepie,xqc,ninja,trump,clinton,pewdiepie,entertainment,porn,anime,hentai,distraction,news,games,gaming,game,yandere,speedrun,ban,record,trendy,trend,trends,like,follow,subscribe,engage,buy,promotional,promoting,promote,rapper,rapping,influence,influencer,deal,savings,troll,trolling".split(',');

bad.forEach(str => { if (str in bad_obj) { bad_obj[str] += -1 } else { bad_obj[str] = -1 } });

var bad_var = -1;

var stuff = {};

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
var sum = values.reduce((a,b) => a+b);
// alert(stuff);
// console.log(stuff);
// alert(`${values}`);
// var page_rank = values.map(s => s/sum).reduce((a,b) => a+b);

alert(`website rated as: ${sum / values.length}`);
// ? task 4
// function checkTask(arr){
//    return Math.max(...arr)
// }
// console.log(checkTask([4, 15, -4, 27, 12, 8]));

// 02
// function checkTask(arr){
//     arr.reduce((prev, curr) => prev > curr ? prev 
//     : curr)
//  }
//  console.log(checkTask([4, 15, -4, 27, 12, 8]));
//  4 > 15 ? 4: 15
//  15 > -4 ? 15: -4  // это все выводится в prev
//  15 

// ? task 5
// function checkTask(arr){
//     let counter ={}
//     arr.forEach((item) => {
//         if(counter[item]){
//             counter[item] = counter[item] + 1
//         }else{
//             counter[item] = 1
//         }
//     })
//     // console.log(counter);
//     let maxNum = 0;
//     let maxCount = 0;
//     for(let key in counter){
//         if(counter[key] > maxCount){
//             maxCount = counter[key]
//             maxNum = +key
//             // console.log(maxNum, maxCount);
//         }
//     }
//     console.log(maxNum);
//     // return maxNum
//     // console.log(maxNum, maxCount);
// }
// checkTask([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4])

// let counter ={
//     '4': 1,
//     '5': 1+1+1+1
//     '3': 1
// }

// let obj = {}
// obj['key'] = 'value'
// obj.key2= 'key2'
// console.log(obj);


// ? task 9
// function checkTask(arr){
//     let sumTillZero = 0;
//     arr.reduce((prev, curr) => {
//         if(curr === 0){
//             sumTillZero = prev
//         }else{
//             return prev + curr
//         }
//     })
//     console.log(sumTillZero);
// }
// checkTask([1, 2, 3, 0, 4, 5, 6])

// ? Task 10
// function checkTask(arr) {
//     arr.forEach(item => {
//         if (item.includes("<h1>")) {
//             console.log(`<h1>${item}</h1>`);
//         } else if (item.includes("<p>")) {
//             console.log(`<p>${item}</p>`);
//         } else if (item.includes("<div>")) {
//             console.log(`<div>${item}</div>`);
//         }
//     })
// }
// checkTask(["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"])

// ? task 11
// function checkTask(arr) {
//     let obj = arr.reduce((prev, curr) => {
//         let key = curr[0]
//         let value = curr[1]
//         // console.log(prev, curr);
//         prev[key] = value
//         return prev
//     }, {})
//     console.log(obj);
// }
// checkTask([['a', 1], ['b', 2]])
// let obj = {}
// obj['key'] = 'value'

// prev curr
// { } ['a', 1] = 1 итерация
// { a: 1 } ['b', 2] = 2 итерация
// { a: 1, b: 2 }  = 3 итерац)


// ? task 12
// function checkTask(arr){
//     // console.log(arr.flat());  // распаковывает внутри массива []
//    let sum =  arr.flat().reduce((a, b) => a + b)
//    console.log(sum)

// }
// checkTask([1,2, [4,5,6], [7,8]])

// ? task 13
// function checkTask(arr) {
//     let newArr = arr.map((item) => {
//         let sum = (item.toString().split('').reduce((a, b) => +a + +b));
//         return (String.fromCharCode(sum));
//     })
//     console.log(newArr.join(''));
// }
// checkTask([584131398786538461382741n, 444521974525439455955n,
//  71415168525426614834414214n, 353238892594759181769n, 
//  48955328774167683152n, 77672648114592331981342373n, 5136831421236n,
// 83269359618185726749n, 2554892676446686256n, 959958531366848121621517n,
// 4275965243664397923577n, 616142753591841179359n, 121266483532393851149467n, 17949678591875681n])



// let arr2 = [
//     436450905757958151n,
//     11258783099996076460563n,
//     4271648547630677847351n,
//     618958267230480336590096n,
//     8758497946868448n,
//     522605576771949556944035n,
//     85066202249185099169760853n,
//     3086832757126n,
//     996521n,
//     927960635227601913n,
//     70078548120507149395588131n,
//     860837n,
//     358019731380917077399530102n,
//     62039800138267504261751603735n,
//     9750891479584997n,
//     918662n,
//     65327012964727042243717157n,
//     232087621279086322105118092n,
//     5211980170217154619622689642n,
//     6124973n,
//     86411816655484980296n,
//     91315560975533164408650219064n,
//     622020778302918273675482n,
//     810589171448852275032504861n,
//     444121583n,
//     33430239609682594751236n,
//     185623925354270032483460275221n,
//     7868767990756882313n,
//     4657463770033462099583n,
//     242033234081n,
//     522740644841373392917114n,
//     406008262691140304161593616100211362n,
//     568510122451787635388154655n,
//     5578397767326623013150481034n,
//     555640745510125078573784n,
//     406901355248415157672497n,
//     88558845201718547978n,
//     68574135720461824293161323n,
//     3676244n,
//     5042122205391979386680691n,
//     73395510612321053412266453664n,
//     24406073369262079776782n,
//     7422295137177317668814n,
//     158882n,
//     372566226366055183434756092n,
//     217801045092586396416854n,
//     387064459629162985218n,
//     27921983810840242015693511824n,
//     1644125056804n,
//     5379171082171129383n,
//     6750612981549243200995103n,
//     32412900856868128268020217613n,
//     479858287n,
//     6096272n,
//     454320294201191419460256n,
//     293398766039677586n,
//     30652983692459763541n,
//     82882672765594704813185n,
//     92583381n,
//     43343754351489585033783532n,
//     1299335n,
//     254078966874894178015532n,
//     129278851477373713752221n,
//     1324382354724457193161741158451n,
//     341401685n,
//     5457110999302082592077217n,
//     95066071456345657725316571n,
//     743409212n,
//     988517320507018868694n,
//     190928581430131876371881026012n,
//     8690621n,
//     9915740590818375796n,
//     13374845638424941804172067n,
//     4729159847810460863472n,
//     4416521647100742520187956283n,
//     29941458499424421700564n,
//     7523244131n,
//     224344126317666108716556700814n,
//     529253721025532996042429751n,
//     867344n,
//     11654415332705915327940693482n,
//     48018003472901929981390383n,
//     2866645196951814499551n,
//     20726910437738542761337334n,
// ];
// checkTask(arr2)

// ? task 14
// function checkTask(input){
//     let arr = input.split(' ');
//     let newArr = arr.map((item) => {
//         if(item.length >= 4){
//             return item[0] + (item.length -2) +item [item.length -1]
//         }else{
//             return item
//         }
//     })
//     console.log(newArr);
// }
// console.log(checkTask('Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!'));


// ? task 15
// function checkTask(nums) {
//     let newNums = nums.map((item) => {
//         let count = 0;
//         nums.forEach((elem) => {
//             if (item > elem) {
//                 count++
//             }
//         })
//         return count
//     })
//     return newNums
// }
// console.log(checkTask([8, 1, 2, 2, 3]))
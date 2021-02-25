let personName=document.getElementById('person')
let quote=document.getElementById('quote')
let unorderedList= document.getElementById('itemList')

////ilk basta eger localstorage bos degilse icinde ki itemleri yazdirsin
if(localStorage.getItem("items")){
    ////local storage bos olmadigi icin onu arraye cevir
    items=localStorage.getItem('items').split(',')
    
    /// local storage'i console log da gor
    console.log(items)
    ////arrayin icinde ki her 2 elementten 1.cisi quote 2.cisi personName oldugu icin for loop 2 artarak devam ediyor
    for(let i=0;i<items.length;i+=2){
      ///burada tek tek yazdiriyorum
        unorderedList.innerHTML+=`<li><q>${items[i]}</q> <em>${items[i+1]}</em></li>`
        
    }
////eger local storage bos ise  itemsi bos bir array'e assign etsin
}else{
    items=[]
}

function addItem(){
    /// burada buttona bastgm da yazdirmasi icin gerekli kodlari yazdim
unorderedList.innerHTML+=`<li><q>${quote.value}</q> <em>${personName.value}</em></li>`
///burada person name ve quote'i arrayin icine attim
items.push(quote.value,personName.value)

///burada localstorage'a kaydettim
localStorage.setItem('items',items)
//burada tusa bastiktan sonra icini bosalttim
personName.value=' '
quote.value=' '
console.log(items)

}
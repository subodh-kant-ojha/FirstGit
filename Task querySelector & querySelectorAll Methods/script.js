//QuerySelector is used to grab only single element

const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='center';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px';

// const fruitItems=document.querySelector('.fruit:nth-child(3)');
// fruitItems.style.backgroundColor='white';

//QuerySelectorAll is used to grab all the element with same tag/class

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++){
    fruitItems[i].style.backgroundColor='white';
    fruitItems[i].style.padding='10px';
    fruitItems[i].style.margin='10px';
    fruitItems[i].style.borderRadius='5px';
}

const OddFruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<OddFruitItems.length;i++){
    OddFruitItems[i].style.backgroundColor='lightgrey';

}

const BasketHeading=document.querySelector('h2');
BasketHeading.style.color='brown';

const OddFruitItem=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<OddFruitItem.length;i++){
    OddFruitItem[i].style.backgroundColor='brown';
    OddFruitItem[i].style.color='white';
}


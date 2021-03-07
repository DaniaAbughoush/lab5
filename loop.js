alert("welcom to our resturant");
var order =prompt('hello what do you like to eat chicken or pizza');
while (order !='chicken' && order !='pizza')
{
    order=prompt ('hello what do you like to eat chicken or pizza');
}
 var itemorder='';
 if (order =='pizza')
 {
     itemorder= '<img src= "loop/pizza.png"/>';
 }
 else
 {
    itemorder= '<img src= "loop/chicken.png"/>'; 
 }

 var numberofpieces = prompt ("how many pieces you want?");
 var result ='';
 for(var i=0;i<numberofpieces;i++)
    {
        result=result+itemorder;
    }
    document.write(result);

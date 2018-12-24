
    var count = 2;
    var countEl = document.getElementById("count1");
    document.getElementById("prop1Value").value = "£" + (count*20) + ".00";
    function plus(){
        count++;
        countEl.value = count;
        total()
    }
    function minus(){ 
      if (count > 1) {
        count--;
        countEl.value = count;
      }total()  
    }
    function total(){
        document.getElementById("prop1Value").value = "£" + (count*20) + ".00";
    }

    
    var count1 = 2;
    var countEl1 = document.getElementById("count2");
    document.getElementById("prop2Value").value = "£" + (count1*20) + ".00";
    function plus1(){
        count1++;
        countEl1.value = count1;
        total1()
    }
    function minus1(){
      if (count1 > 1) {
        count1--;
        countEl1.value = count1;
      }total1()  
    }
    function total1(){
        document.getElementById("prop2Value").value = "£" + (count1*20) + ".00";
    }


    function deleteProd1(){
        document.getElementById("prod1").style.display = "none";
    }

    function deleteProd2(){
        document.getElementById("prod2").style.display = "none";
    }
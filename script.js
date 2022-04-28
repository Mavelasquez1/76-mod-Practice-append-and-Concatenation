

//1a. Replace selector 1 with the class name for the button
$(".to-pack-button").click(function() {

//1b. Replace newVariable with any variable name and replace input with the class name of the input tag.
    let flower = $(".to-pack-input").val();

//2a. Replace selector 2 with the class name for the packing list 
//2b. Replace tag with unorder list tags. (<ul> </ul>).
//2c. Replace newVariable with the name of your variable

    $(".packing-list").append("<ul>"+"I'm going to pack" + flower+ "</ul>");

//3.Add "I'm going to pack" to the append section in line 12 after the first tag.
    //ex:$(".packingList").append("tag"+ "I'm going to pack"+newVariable+"tag")

//5b. repeat steps 1-4
  
    
  });
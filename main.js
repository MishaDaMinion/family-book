var images = ["family book.png","dad.png", "mom.png" , "sister.png", "brother.png"];
var names = ["My Family Book!","Udupi Harisharan", "Rachana Acuta Rao", "Misha Sharan", "Aadit Sharan"];

var i = 0;
function move()
{
    i++;
    var family_members = 4
    if(i > family_members)
      {
          i = 0;
      }

      var updatedImage = images[i];
      var updatedName = names[i] ;


      document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;

   
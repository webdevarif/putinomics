$(document).ready(function () {
    "use strict";

    
    /*======================
    Javascript for preloader
    =======================*/
      $(window).on("load", function () {
          $(".preeloader").fadeOut();
    });
    
		try {
      $("select#countries").msDropDown();
      } catch(e) {
      alert(e.message);
      }

      $(".filter-item:before").on("click", function(){
        $(".filter-item").removeClass("show");
    });
    // $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    //   })
});


/*-------------------------------------------------------------------------------
Search Filter 
-------------------------------------------------------------------------------*/
function searchFilter1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchFilter1");
    filter = input.value.toUpperCase();
    table = document.getElementById("searchTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}
function searchFilter2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchFilter2");
    filter = input.value.toUpperCase();
    table = document.getElementById("searchTable2");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}
/*-------------------------------------------------------------------------------
Search Box
-------------------------------------------------------------------------------*/
function SuggestionFilter() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("filterInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("SuggestionFilter");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
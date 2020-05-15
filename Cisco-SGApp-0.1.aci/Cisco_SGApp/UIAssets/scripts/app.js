window.ADDRESS = "https://172.31.187.150";
window.ENTRY_POINT = "https://" + "172.31.187.150";
//POST
$.extend({
 xResponse: function() {
    var y = null;
    $.ajax({
      type: "POST",
      url: window.ENTRY_POINT + "/api/aaaLogin.json",
      dataType: "json",
      crossDomain: true,
      async: false,
      timeout: 0,
      data: JSON.stringify({
        aaaUser: {
          attributes: {
            name: "admin",
            pwd: "uns3965!"
          }
        }
      }),

      success: function(data) {
        y = data.imdata[0].aaaLogin.attributes.token;
      }
    });
    return y;
  }
});


var tok = $.xResponse();

//GET
$.extend({
  xResponse: function(ul) {
    {
      var x = null;
      $.ajax({
        type: "GET",
        url: "https://172.31.187.150/" + ul,
        async: false,
        timeout: 0,
        headers: {
          devcookie: tok
        },

        dataType: "json",
        contentType: "application/json",
        success: function(results) {
          x = results;
        }
      });
      return x;
    }
  }
});



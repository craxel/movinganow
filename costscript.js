$(document).ready(function() {
  // -- Prices for small van
  var smallVan = {
    driverOnly: {
      "1h": "34,99",
      "2h": "64,99",
      "4h": "129,98"
    },
    oneHelper: {
      "1h": "34,99",
      "2h": "64,99",
      "4h": "129,98"
    },
    twoHelpers: {
      "1h": "34,99",
      "2h": "64,99",
      "4h": "129,98"
    }
  };

  // -- Prices for medium van
  const mediumVan = {
    driverOnly: {
      "1h": "39,98",
      "2h": "69,98",
      "4h": "134,99"
    },
    oneHelper: {
      "1h": "54,99",
      "2h": "104,99",
      "4h": "189,98"
    },
    twoHelpers: {
      "1h": "69,98",
      "2h": "124,99",
      "4h": "244,99"
    }
  };

  // -- Prices for large van
  const largeVan = {
    driverOnly: {
      "1h": "44,99",
      "2h": "74,99",
      "4h": "144,99"
    },
    oneHelper: {
      "1h": "59,99",
      "2h": "109,99",
      "4h": "204,99"
    },
    twoHelpers: {
      "1h": "74,99",
      "2h": "134,99",
      "4h": "259,99"
    }
  };

  var vehicles = {
    smallVan: smallVan,
    mediumVan: mediumVan,
    largeVan: largeVan
  };

  var inputs = {
    van: "input[name='Van']",
    helpers: "input[name='helper']",
    time: "input[name='hour']"
  };

  var vanSize = null;
  var numberOfHelpers = null;
  var amountOfTime = null;

  function updatePrice() {
    if (!vanSize) return;
    if (!numberOfHelpers) return;
    if (!amountOfTime) return;

    var cost = vehicles[vanSize][numberOfHelpers][amountOfTime];
    document.getElementById("pricePlaceholder").innerHTML = cost;
    $(".hidden-price").show();
  }

  $(inputs.van).change(function() {
    var size = $(inputs.van + ":checked").val();

    function vanSizeFromNumber(number) {
      switch (number) {
        case "3":
          return "largeVan";
        case "2":
          return "mediumVan";
        default:
          return "smallVan";
      }
    }

    vanSize = vanSizeFromNumber(size);
    updatePrice();
  });

  $(inputs.helpers).change(function() {
    var helpers = $(inputs.helpers + ":checked").val();

    function helpersFromNumber(number) {
      switch (number) {
        case "3":
          return "twoHelpers";
        case "2":
          return "oneHelper";
        default:
          return "driverOnly";
      }
    }

    numberOfHelpers = helpersFromNumber(helpers);
    updatePrice();
  });

  $(inputs.time).change(function() {
    var time = $(inputs.time + ":checked").val();

    function timeFromNumber(number) {
      switch (number) {
        case "3":
          return "4h";
        case "2":
          return "2h";
        default:
          return "1h";
      }
    }

    amountOfTime = timeFromNumber(time);
    updatePrice();
  });
})
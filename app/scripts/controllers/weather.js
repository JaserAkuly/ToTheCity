/**
 * Created by jaser.akuly on 10/27/15.
 */

angular.module('toTheCityApp')
  .controller('WeatherCtrl', function ($scope, $interval, $http) {

    $interval(function () {

      var format = $scope.format;
      var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?&APPID=cb51947c249a26ce45b6a7cc1e794a7d&q=&cnt=3';

      //change how they generate the url
      if ($scope.location !== undefined) {
        url += '&q=' + $scope.location;
      } else {
        console.log("Error, please provide a city!");
        return;
      }

      //checking what the format the user provided ask the api the corresponding weather
      if (format === 'Celsius') {
        url += "&units=metric";
      } else if (format === 'Fahrenheit') {
        url += "&units=imperial";
      }


      $http({
        method: 'GET',
        url: url
      }).then(function successCallback(response) {
        console.log("Got success!", response);

        var data = response.data.list[1];

        for(var i in data)
        {
          var id = data[i];

          console.log("This is your" + id);
        }


        var dateStr = JSON.parse(response.data.list[0].dt);
        var forcastDate = new Date(dateStr)*1000;

        $scope.forecast_date = forcastDate;
        $scope.temperature_max = response.data.list[0].temp.max;
        $scope.temperature_min = response.data.list[0].temp.min;
        $scope.windspeed = response.data.list[0].speed;

      });
    }, 1000);
  });

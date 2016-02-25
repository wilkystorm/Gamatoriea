var gamatoriea = angular.module("gamatoriea",[]);

gamatoriea.controller(
 'PLayerListCtrl', function($scope) {
  var player = { 
    "type": "object",
    "properties": {
      "number":      { "type": "number" },
      "name": { "type": "string" },
      "player_type": { "type": "string",
                     "enum": ["Knight", "Wizard", "Assassin", "Paladin"] }
    }
  };
  var players = [];
  for (i =0; i < 4; i++) {
	player = new Object();
	player.number = i;
	players[i] = player;
  } 
  $scope.players = players;
  $scope.options = ["Knight", "Wizard", "Assassin", "Paladin"];
 }
);


app.factory("BoardService", ['Restangular', function(Restangular){
  var boards = {}

  Restangular.all("boards").getList().then(function(data){
    boards.list = data;
    boards.selectedBoard = boards.list[0].id
  })

  return {
    boards: boards
  }
}]);

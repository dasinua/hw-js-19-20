$(function(){
  var urlstr = "http://dasinua.github.io/hw-js-19-20/data.json",
      skills = [],
      names,
      friends = [];



  $.ajax({url: urlstr,
          success: function(data) {
//        1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту;
            _.forEach(data, function(value, index, collection){
                 skills = _.union(value.skills,skills);

             });



            skills = _.sortBy(skills,function(val) {
                return val.toLowerCase();
            });
            console.log("Отсортированый массив скилов. Сортировался методом _.sortBy передал функцию возвращает toLowerCase() каждого скила, чтобы корректо сортировать скилы которые написаны с большой буквы");
            console.log(skills);

//       2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends)
            sortedCollectin =_.sortBy(data,function(item) {
//              console.log("name: " + item.name + "frends: " + item.friends.length);
              return item.friends.length});
            names = _.map(sortedCollectin,'name');
            console.log("Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends) ");
            console.log(names);

//3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей
            friendsArrays = _.map(sortedCollectin,'friends');
            friendsArrays = _.invokeMap(friendsArrays,function(){
              return _.map(this,'name')
            })
            friendsArrays = _.forEach(friendsArrays,function(item){
              friends = _.union(friends,item);
            })

            console.log("Массив всех друзей всех пользователей, не должно быть повторяющихся людей. Тоже отсортировал для лучшей читабельности");
              friends = _.sortBy(friends,function(val) {
                return val.toLowerCase();
            });
            console.log(friends);


          }});


})

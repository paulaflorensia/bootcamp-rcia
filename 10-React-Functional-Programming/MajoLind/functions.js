// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
  // Part 1 - Find all users older than 24
  const result = texasss.filter(texas => texas.age > 24);
  //show
  for(x of result){
    document.getElementById("Arry1-Part1").innerHTML += `<p>${x.name} (${x.age})</p>`
  }
  
  // Part 2 - Find the total age of all users
  const result1 = function(){
  var newArray =[];
  for (x of texasss){newArray.push(x.age)};
  const sumatoria = newArray.reduce((valorAnterior, valorActual)=>{return valorAnterior + valorActual});
    //show
  document.getElementById("Arry1-Part2").innerHTML +=`<p id="sumatoria">${sumatoria}</p>`;
  }
  //call
  const sumatoria = result1();
  
  
  
  // Part 3 - List all female coders
  const result2 = texasss.filter(texas => texas.gender==='f');
  //show
  for(x of result2){
    document.getElementById("Arry1-Part3").innerHTML += `<p>${x.name}</p>`
  };
  
  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order
  const uss = newieyork.filter(x => x.us);
  const result3 = function(array){
    var NewArray=[];
    for(x of array){
      NewArray.push(x.name)
    };
    const Ord_NewArray = NewArray.sort();
    for( x of Ord_NewArray){
      //show
       document.getElementById("Arry2-Part1").innerHTML += `<p>${x}</p>`
    }
  
  }
  //call
  result3(uss);
  // Part 2 - Sort all users by age
  const result4 = newieyork.sort(function(a, b){return b.age-a.age});
  for(x of result4){
    //show
    document.getElementById("Arry2-Part2").innerHTML += `<p>${x.name} (${x.age})</p>`
  }
  
  // Part 3 -  List all female coders
  const result5 = newieyork.filter(ny => ny.gender==='f');
  //show
  for(x of result5){
    document.getElementById("Arry2-Part3").innerHTML += `<p>${x.name}</p>`
  };
  
  
  // ARRAY 3
  const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  
  // Part 1 - Find the total age of male coders under 25 
  const result6 = vegzas.filter(v => v.gender === 'm' && v.age < 25); 
  const totalAge = function(array){
    var NewA =[];
    for (x of array){
      NewA.push(x.age)
    }
    const totalA = NewA.reduce(function(Ant, Act){return Ant + Act});
    //show
     document.getElementById("Arry3-Part1").innerHTML += `<p id="sumatoria" >${totalA}</p>`
  };
  totalAge(result6);
  
  // Part 2 - List all male coders over 30
  const result7 = vegzas.filter(v => v.gender === 'm' && v.age > 30); 
  //show
  for (x of result7){
    document.getElementById("Arry3-Part2").innerHTML += `<p>${x.name}</p>` 
  };
  
  
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  const result8 = (texasss.concat(newieyork)).concat(vegzas);
  const Ages = function(arr) {
    var newArr= [];
    for(x of arr){
      newArr.push(x.age)
    };
  const A = newArr.reduce(function(Ant, Act){ return Ant + Act });
    //show
    document.getElementById("Arry3-Part3").innerHTML += `<p id="sumatoria" >${A}</p>`
  };
  //call
  Ages(result8)
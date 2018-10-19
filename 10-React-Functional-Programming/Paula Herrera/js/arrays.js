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
  
  const older = texasss.filter(function(texasss){
      return texasss.age > 24});
  
  for(x of older){
    document.getElementById("Part1").innerHTML +=
    `<p>${x.name}, ${x.age}</p>`
  }
  
  // Part 2 - Find the total age of all users
  
  const ages = function(){
    var total =[];
  for (x of texasss){total.push(x.age)};
  const totalages = total.reduce(function(previous, current)
    {return previous + current}, 0);
    
  document.getElementById("Part2").innerHTML +=`<p id="totalages">${totalages}</p>`;
  }
  const totalages = ages();
  
  // Part 3 - List all female coders
  
  const women = texasss.filter(function(female){
    return female.gender=='f'});
  for(x of women){
  document.getElementById("Part3").innerHTML += `<p>${x.name}</p>`
  };
  
  //---------------------------------------------------------
  
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
  
  const UserinUS = newieyork.filter(function(x){
    return x.us});
  const US = function(ny){
    var users=[];
  for(x of ny){
      users.push(x.name)
    };
  const orUsers = users.sort();
  for(x of orUsers){
  document.getElementById("Part1a").innerHTML += `<p>${x}</p>`}
  }
  US(UserinUS);
  
  // Part 2 - Sort all users by age
  
  const byage = newieyork.sort(function(a, b){
    return b.age-a.age});
  for(x of byage){
  document.getElementById("Part2a").innerHTML +=
     `<p>${x.name}, ${x.age}</p>`
  }
  
  // Part 3 -  List all male coders
  
  const men = newieyork.filter(function(male){
    return male.gender=='m'});
  for(x of men){
  document.getElementById("Part3a").innerHTML += `<p>${x.name}</p>`
  };
  
  //--------------------------------------------------------------
  
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
  
  const under25 = vegzas.filter(function(male){
    return male.gender == 'm' && male.age < 25}); 
  const totalunder25 = function(vegzas){
    var UsUn25 =[];
  for (x of vegzas){
      UsUn25.push(x.age)
    }
  const MaUsUn25 = UsUn25.reduce(function(previous, current){return previous + current});
  document.getElementById("Part1b").innerHTML += `<p id="under25" >${MaUsUn25}</p>`
  };
  totalunder25(under25);
  
  // Part 2 - List all male coders over 30
  
  const over30 = vegzas.filter(function (over){
    return over.gender == 'm' && over.age > 30}); 
  for (x of over30){
    document.getElementById("Part2b").innerHTML += `<p>${x.name}</p>` 
  };
  
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  
  const totalagescities = (texasss.concat(newieyork)).concat(vegzas);
  const cities = function(a) {
    var UsAgcity= [];
  for(x of a){
      UsAgcity.push(x.age)
    };
  const AG = UsAgcity.reduce(function(previous, current){
    return previous + current });

  document.getElementById("Part3b").innerHTML += `<p id="total" >${AG}</p>`
  };
  cities(totalagescities)
  
  

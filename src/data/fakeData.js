const fakeData = [{
        "id": 1,
        "name": "Diego Maradona",
        "info": "Nicknamed The Golden Boy, Diego Maradona is considered one of the greatest footballers of all time. Thanks to his popularity and controversial personal life, which includes drug abuse issues and addiction to cocaine, Diego Maradona became a world-renowned counterculture icon. He was also an iconic figure in popular culture.",
        "image": "https://i.postimg.cc/7hKCNRQb/Maradona.jpg",
        "salary": 65,
        "birthplace": "Lanús, Argentina",
        "birthdate": "October 30, 1960",
        "club": "Barcelona (Spain)",
        "position": "Attacking Midfielder, Second Striker"
    },
    {
        "id": 2,
        "name": "Lionel Messi",
        "info": "Considered one of the best football players in the world and a prolific goal scorer, Lionel Messi has shattered and created numerous records in his playing career. Regarded by another soccer legend, Diego Maradona, as his successor, the Argentinian superstar is also one of the world’s highest paid athletes.",
        "image": "https://i.postimg.cc/ZnbBpmH1/messi.jpg",
        "salary": 55,
        "birthplace": "Rosario, Argentina",
        "birthdate": "June 24, 1987",
        "club": "Paris Saint-Germain (France)",
        "position": "Forward"
    },
    {
        "id": 3,
        "name": "Neymar",
        "info": "Amongst the best football players in the world presently, Neymar is a part of Brazil national team and French club Paris Saint-Germain. The prolific goal scorer debuted with Santos and played for Barcelona before joining PSG in a deal that made him the world’s most expensive player. He led Brazil national team to its first Olympic gold medal in 2016.",
        "image": "https://i.postimg.cc/y6jSBJYB/neymar.jpg",
        "salary": 50,
        "birthplace": "State of São Paulo, Brazil",
        "birthdate": "February 5, 1992",
        "club": "Paris Saint-Germain (France)",
        "position": "Forward"
    },
    {
        "id": 4,
        "name": "Zlatan Ibrahimovic",
        "info": "Swedish professional footballer Zlatan Ibrahimović currently plays as a striker for Serie A club A.C. Milan. Widely regarded as one of the best strikers of his generation, he is one of the most decorated active footballers in the world.  He is Sweden's all-time leading goalscorer. He is a brash person and has been involved in several violent incidents with teammates.",
        "image": "https://i.postimg.cc/C1NdFt0J/zlatan-ibrahimovic.jpg",
        "salary": 30,
        "birthplace": "Malmo, Sweden",
        "birthdate": "October 3, 1981",
        "club": "AC Milan (Italy)",
        "position": "Striker"
    },
    {
        "id": 5,
        "name": "David Beckham",
        "info": "David Beckham is a former English footballer who was football superstar on-field and a heartthrob off-field. A former player for Manchester United, Real Madrid and Milan, among others, Beckham was a free-kick specialist, a brilliant crosser of the ball and the first English player to win league titles in four countries. His passion for football, charisma and fashion style have made him an international sensation.",
        "image": "https://i.postimg.cc/6QtWbcJX/david-beckham.jpg",
        "salary": 30,
        "birthplace": "London, England",
        "birthdate": "May 2, 1975",
        "club": "Manchester United (England)",
        "position": "Midfielder"
    },
    {
        "id": 6,
        "name": "Cristiano Ronaldo",
        "info": "Widely regarded as one of the greatest players of all time, Portuguese football player, Cristiano Ronaldo, is one of the world's highest-paid athletes. He is a versatile attacker capable of playing on either wing as well as through the center of the pitch. He has the distinction of being the first European to score 100 international goals.",
        "image": "https://i.postimg.cc/zGsypKpw/Ronaldo.jpg",
        "salary": 55,
        "birthplace": "Funchal, Portugal",
        "birthdate": "February 5, 1985",
        "club": "Al Nassr (Saudi Arabian)",
        "position": "Forward"
    },
    {
        "id": 7,
        "name": "Pele",
        "info": "Brazilian football legend Edson Arantes do Nascimento, better known as Pele, was named the Football Player of the Century by the IFFHS. He called football “The Beautiful Game” and was one of the world’s highest-paid athlete for a while. His 1279 goals in 1363 games is a Guinness World Record.",
        "image": "https://i.postimg.cc/BQvPvqXF/pele.jpg",
        "salary": 60,
        "birthplace": "Tres Coracoes, Brazil",
        "birthdate": "October 23, 1940",
        "club": "Santos FC (Brazil)",
        "position": "Forward, Attacking Midfielder"
    },
    {
        "id": 8,
        "name": "Harry Kane",
        "info": "A brilliant striker known for his impressive ability to score goals, Harry Kane is an English football player who leads the national team of England and also plays for Premier League club, Tottenham Hotspur. Harry Kane has been named the Premier League Player of the Month six times and received the Golden Boot twice.",
        "image": "https://i.postimg.cc/pdjFtqy1/harry-cake.jpg",
        "salary": 35,
        "birthplace": "Walthamstow, England",
        "birthdate": "July 28, 1993",
        "club": "Tottenham Hotspur (England)",
        "position": "Striker"
    },
    {
        "id": 9,
        "name": "Ronaldinho",
        "info": "Regarded as one of the best football players of all time, Ronaldinho played a crucial role in Brazil’s victory in 2002 FIFA World Cup. Later, he helped FC Barcelona win two La Liga and a UEFA Champions League title. The two time FIFA world Player of the Year, who retired in 2018, was known for his technical skills and creativity.",
        "image": "https://i.postimg.cc/Nj9y1p8f/Ronaldinho.jpg",
        "salary": 55,
        "birthplace": "Porto Alegre, State of Rio Grande do Sul, Brazil",
        "birthdate": "March 21, 1980",
        "club": "Barcelona (Spain)",
        "position": "Attacking Midfielder, Winger"
    },
    {
        "id": 10,
        "name": "Zinedine Zidane",
        "info": "Amongst the greatest footballers of all time, Zinedine Zidane led France to victories in the FIFA World Cup in 1998 and the European Championship in 2000. Later, the three-time FIFA World Player of the Year took up the position of Real Madrid manager and carved yet another success story by winning major titles like Champions League and UEFA Super Cups.",
        "image": "https://i.postimg.cc/3R7dQhsd/Zinedin-Zidan.jpg",
        "salary": 50,
        "birthplace": "La Castellane, Marseille, France",
        "birthdate": "June 23, 1972",
        "club": "Real Madrid CF (Spain)",
        "position": "Attacking Midfielder"
    },
    {
        "id": 11,
        "name": "Gareth Bale",
        "info": "The charismatic Welsh footballer player, Gareth Frank Bale played for Southampton football club and Tottenham Hotspur extensively before joining Real Madrid in 2013 for a fees that exceeded Christiano Ronaldo’s earlier record fee. Known for his speed and accuracy, Gareth Bales is also the captain of Wales national team and plays for Tottenham Hotspur, on loan from Real Madrid.",
        "image": "https://i.postimg.cc/hPCx8XHM/gareth-bale.jpg",
        "salary": 40,
        "birthplace": "Cardiff, Wales",
        "birthdate": "July 16, 1989",
        "club": "Tottenham Hotspur (England)",
        "position": "Winger"
    },
    {
        "id": 12,
        "name": "Robert Lewandowski",
        "info": "Considered one of the best football players in the world, Robert Lewandowski plays for Bundesliga club Bayern Munich and leads the Poland national team as its captain. Known for his exceptional goal scoring ability and striking skills, Lewandowski has earned several accolades including Polish Player of the Year title for eight consecutive years. Besides, he is also a venture capitalist.",
        "image": "https://i.postimg.cc/L60YYr1b/robert-lewandowski.jpg",
        "salary": 45,
        "birthplace": "Warsaw, Poland",
        "birthdate": "August 21, 1988",
        "club": "Barcelona (Spain)",
        "position": "Striker"
    },
    {
        "id": 13,
        "name": "Luis Suarez",
        "info": "Controversy’s favorite child Uruguayan professional Luis Suarez has been in the news for an infamous handball and also for biting opponents. He now plays for Atlético Madrid and has previously represented Barcelona and Liverpool, winning 19 trophies in his career to date. He is Uruguay's leading goalscorer of all time.",
        "image": "https://i.postimg.cc/tCRWV3mY/luis-suarez.jpg",
        "salary": 45,
        "birthplace": "Salto, Uruguay",
        "birthdate": "January 24, 1987",
        "club": "Gremio (Brazil)",
        "position": "Striker"
    },
    {
        "id": 14,
        "name": "Pep Guardiola",
        "info": "A football addict from beginning, Pep Guardiola went on to become a key player with the Barcelona and the Spanish National team. He played a crucial role in winning major titles like the La Liga and an Olympic gold medal. After retiring as a player, he became a coach and is widely regarded as one of the world's best coaches.",
        "image": "https://i.postimg.cc/Dw8Gx2hh/josep-guardiola.jpg",
        "salary": 50,
        "birthplace": "Santpedor, Spain",
        "birthdate": "January 18, 1971",
        "club": "Manchester City (England)",
        "position": "Defensive Midfielder"
    },
    {
        "id": 15,
        "name": "Gianluigi Buffon",
        "info": "Gianluigi Buffon is an Italian footballer, often considered the greatest goalkeeper of all time. The first goalkeeper to receive the Golden Foot Award, Buffon was included in Pelé's FIFA 100 list in 2004. He is also well-known for his charity work; in 2019, he was named a Goodwill Ambassador for the United Nations' World Food Programme.",
        "image": "https://i.postimg.cc/wjZmPSxm/gianluigi-buffon.jpg",
        "salary": 35,
        "birthplace": "Carrara, Italy",
        "birthdate": "January 28, 1978",
        "club": "Parma Calcio (Italy)",
        "position": "Parma Calcio"	
    },
    {
        "id": 16,
        "name": "Luka Modric",
        "info": "Real Madrid midfielder Luka Modrić has won 17 big trophies for his club. He had a difficult childhood, growing up amid the Croatian War of Independence. He has played for Tottenham Hotspur, and in 2018, he led Croatia to their first football World Cup final and won the Golden Ball.",
        "image": "https://i.postimg.cc/26FL1yQQ/luka-modric.jpg",
        "salary": 45,
        "birthplace": "Zadar, Croatia",
        "birthdate": "September 9, 1985",
        "club": "Real Madrid (Spain)",
        "position": "Midfielder"
    },
    {
        "id": 17,
        "name": "Kaka",
        "info": "Regarded as one of the best footballers of his generation, Kaká is a Brazilian retired football player. He is one of eight footballers to have won the Ballon d'Or, the UEFA Champions League, and the FIFA World Cup. Also known for his humanitarian work, Kaká has been working with the United Nations, as part of its World Food Programme initiative.",
        "image": "https://i.postimg.cc/HLzpqMd7/kaka.jpg",
        "salary": 50,
        "birthplace": "Gama, Federal District, Brazil",
        "birthdate": "April 22, 1982",
        "club": "AC Milan (Italy)",
        "position": "Attacking Midfielder"
    },
    {
        "id": 18,
        "name": "Andres Iniesta",
        "info": "Spanish midfielder Andrés Iniesta, who now captains the Japanese club Vissel Kobe, has had a 22-year stint with Barcelona, serving as a captain in three seasons and winning nine La Ligas and four UEFA Champions Leagues. He scored the winning goal to help Spain win the 2010 FIFA World Cup.",
        "image": "https://i.postimg.cc/WzTr8gNY/andres-iniesta.jpg",
        "salary": 40,
        "birthplace": "Fuentealbilla, Spain",
        "birthdate": "May 11, 1984",
        "club": "Vissel Kobe (Japan)",
        "position": "Midfielder"
    },
    {
        "id": 19,
        "name": "Xavi",
        "info": "Former Barcelona footballer Xavi won multiple trophies with the team, such as the La Liga and the UEFA Champions League. Famous for his tiki-taka style, he also helped Spain win the FIFA World Cup in 2010. After playing for the Qatari club Al-Sadd, he began coaching the team.",
        "image": "https://i.postimg.cc/Zq6CQnDG/xavi-hernandez.jpg",
        "salary": 30,
        "birthplace": "Terrassa, Spain",
        "birthdate": "January 25, 1980",
        "club": "Barcelona (Spain)",
        "position": "Midfielder"
    },
    {
        "id": 20,
        "name": "Francesco Totti",
        "info": "Italian footballer Francesco Totti is known for his 25-year stint with Roma. Nicknamed “The Golden Boy” and “The Gladiator,” he led Roma to win the Serie A and the Coppa Italia. He was also part of the 2006 FIFA World Cup-winning Italian team. He was named to Pele’s FIFA 100. ",
        "image": "https://i.postimg.cc/NFDXzFLs/francesco-totti.jpg",
        "salary": 25,
        "birthplace": "Rome, Italy",
        "birthdate": "September 27, 1976",
        "club": "Roma (Italy)",
        "position": "Attacking Midfielder, Forward"
    }
];

export default fakeData;
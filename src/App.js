function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}/>
    </div>
  );
}

const foodILike =[
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi&f=1',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eMl_BEvZz0cUY_10ZnkJZwHaE9%26pid%3DApi&f=1',
  },
  {
    name: 'Bibimbap',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.od4YprzuR0ZOmv851wA0OAHaEx%26pid%3DApi&f=1',
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mW17Z8uq6unL6xvle_X0YgHaHa%26pid%3DApi&f=1',
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XiO-APPrmYLstQXFFJDGrgHaE-%26pid%3DApi&f=1',
  },
];

function renderFood(dish) {
  return <Food key={dish.name} name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

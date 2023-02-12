import Card from "../Card/card.component";
import "./card-list.styles.css";
const CardList =({ monsters })=> (
    // { monsters } called destructuring
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
)
export default CardList;

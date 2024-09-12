interface Card {
  id: number;
  name: string;
  email: string;
}

const CardComponent = ({ card }: { card: Card }) => {
  return (
    <div className="bg-white shadow-lg rounded-md mb-2 p-3">
      <h3 className="text-xl text-semibold">{card.name}</h3>
      <div>ID: {card.id}</div>
      <p>{card.email}</p>
    </div>
  );
};

export default CardComponent;

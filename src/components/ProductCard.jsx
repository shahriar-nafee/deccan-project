import PropTypes from "prop-types";

export const ProductCard = ({ item }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-black-50">{item.category}</h6>
        <p className="card-text flex-grow-1">{item.description}</p>
        <p className="card-text">
          Price: <b>{item.price}</b>
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

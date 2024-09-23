import PropTypes from "prop-types";

export const ProductCard = ({ item }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {item.category}
          </h6>
          <p className="card-text">{item.description}.</p>
          <p className="card-text">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

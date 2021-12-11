import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;

    return (
      <div data-testid="movie-card">
        <nav className="movie-card-body ">
          <h4 className="movie-card-title">{ title }</h4>
          <img className="movie-card-image" src={ imagePath } alt="Renderizar a imagem" />
          <p className="movie-card-storyline">{ storyline }</p>
          <Link to={ `/movies/${id}` }> VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;

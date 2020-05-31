import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BookCardControllers from '../../../_shared/BookCardControlers';

const useStyles = makeStyles({
  root: {
    maxWidth: '300px',
    margin: '15px',
    position: 'relative',
    paddingBottom: '40px',
  },
  content: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  media: {
    height: '200px',
    cursor: 'pointer',
  },
});

export const BookCard = ({ book, changeSearchMode }) => {
  const { id, title, description, img, category } = book;

  const classes = useStyles();

  const handleClick = () => {
    changeSearchMode(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/books/${id}`} className={classes.content} onClick={handleClick}>
          <CardMedia className={classes.media} image={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="primary">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography variant="body2" color="primary" component="p">
              {category}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <BookCardControllers bookId={id} />
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
  changeSearchMode: PropTypes.func.isRequired,
};

import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Moment from "react-moment";
import './ArticleCards.css'

export default function ArticleCards({ article }) {
  return (
    <Card className='article-cards' sx={{ width: 265, height: 350 }}>
      <CardMedia
        component="img"
        alt={article.title}
        height="210"
        image={process.env.REACT_APP_BACKEND_URL + article.image.formats.small.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {article.description}
        </Typography>
        <Typography variant="body2" component="div">
          {<Moment format="ll">{article.published_at}</Moment>}
        </Typography>
      </CardContent>
    </Card>
  );
}


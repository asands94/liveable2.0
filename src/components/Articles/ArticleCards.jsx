import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Moment from "react-moment";
import './Articles.css'

export default function ArticleCards({ article }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={article.title}
        height="140"
        image={process.env.REACT_APP_BACKEND_URL + article.image.formats.small.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardHeader
        subheader={<Moment format="MMM Do YYYY">{article.published_at}</Moment>}
      />
    </Card>
  );
}


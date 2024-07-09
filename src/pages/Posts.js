import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog.vitabletech.in/wp-json/wp/v2/posts?per_page=10&_embed')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', width:'1400px', margin:'auto', justifyContent:'center', marginTop:'80px', marginBottom:'80px' }}>
      {posts.map((post) => {
        const thumbnailUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        return (
          <Card key={post.id} sx={{ maxWidth: 345, marginBottom: 2, flex: '1 0 30%' }}>
            <CardMedia
              sx={{ height: 240 }}
              image={thumbnailUrl || "/static/images/cards/contemplative-reptile.jpg"}
              title={post.title.rendered}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title.rendered}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.excerpt.rendered.replace(/<[^>]+>/g, '')} {/* Remove HTML tags */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={post.link} target="_blank">Read More</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default Posts;

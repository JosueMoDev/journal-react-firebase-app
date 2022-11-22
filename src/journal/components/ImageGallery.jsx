import { ImageList, ImageListItem } from '@mui/material';
import React from 'react'

export const ImageGallery = ({ imagensURL, title }) => {
  return (
        <ImageList sx={{ width: '100%', height: 450}} cols={3} rowHeight={164}>
        {imagensURL.map((imagen) => (
          <ImageListItem key={imagen}>
            <img
              src={`${imagen}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );

}

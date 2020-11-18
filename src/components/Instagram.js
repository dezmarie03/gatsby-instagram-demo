// Instagram.js
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 12) {
          edges {
            node {
              caption
              media_url
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500 quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div style={{
        marginBottom: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {
          data.allInstagramContent.edges.map((item, i) => (
            item.node.localImage ? (
              <div>
                <a
                  href={item.node.link}
                  target='_blank'
                  rel='noopener'
                  tabIndex='0'
                >
                  <Image
                    fluid={item.node.localImage.childImageSharp.fluid}
                  />
                </a>
              </div>
            ) : (<div></div>)
          ))
        }
      </div>
    )}
  />
);

export default Instagram;

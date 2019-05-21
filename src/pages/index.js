import React from "react"
import { graphql } from "gatsby"
import TemplateWrapper from "../layouts/index";

export default ({data}) => (
<TemplateWrapper>
{data.allWordpressPost.edges.map(({node}, id) =>(
    <div key={node.id}>
    <h3> {node.title}</h3>
    <p dangerouslySetInnerHTML={{__html: node.content}} ></p>
    {/* <div><img src={node.featured_media.source_url} alt={node.title}/> </div> */}
    </div>
))}

</TemplateWrapper>
)
export const data =  graphql`
    query{
        allWordpressPost {
            edges {
              node {
                id
                slug
                title
                content
                excerpt
                date
                modified
              }
            }
          }
    }    `   
    if (data.errors) {
        throw new Error(data.errors)
      }

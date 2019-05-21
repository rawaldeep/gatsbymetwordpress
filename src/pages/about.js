import React from "react"
import TemplateWrapper from "../layouts/index";
import { graphql } from "gatsby";

export default ({data}) => (
<TemplateWrapper>
<h1>About {data.site.siteMetadata.title}</h1>
<p>
    We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food.
</p>
</TemplateWrapper>
)
export const query = graphql`
query{
    site{
        siteMetadata{
            title
        }
    }
}`

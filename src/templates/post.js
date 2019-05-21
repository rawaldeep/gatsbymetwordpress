import React, { Component } from "react";
import {graphql} from "gatsby"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
import Layout from "../layouts/index";
class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        // const resolutions = (post.featured_media) ? post.featured_media.localFile.childImageSharp.resolutions : null


        // console.log(resolutions)

        return (
            <Layout>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {/* {resolutions &&
                    <div>
                        <Img resolutions={resolutions}/>
                        < img src={resolutions.src} alt=""/>
                    </div>
                } */}

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* <div dangerouslySetInnerHTML={{__html: facebook}}></div>
                <div dangerouslySetInnerHTML={{__html: twitter}}></div> */}

                {/*{post.acf !== null &&
                    <div>
                        <h3>Facebook</h3>
                        {post.acf.facebook}

                            <h3>Twitter</h3>
                        {post.acf.twitter}
                    </div>
                }*/}
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
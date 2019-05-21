import React from "react"

import { graphql, StaticQuery, Link } from "gatsby"

const MainMenu = () => (
  <StaticQuery
  query= { graphql`
  query{
    allWordpressWpApiMenusMenusItems{
      edges{
        node{
          id
          items{
            title
            object_slug
            url
            type
          }
        }
      }
    }
  }
  `}
  render={
    data=>(
      <div>
           <h1>Main Menu</h1>
     <ul>
               {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) =>
                       { if(item.type === 'custom'){
                         return (  <li key={item.object_slug}> <Link to={item.object_slug}>{item.title}</Link> </li>)
                       }
                       if(item.type === 'post_type'){
                        return (  <li key={item.object_slug}> <Link to={`/post/${item.object_slug}`}>{item.title}</Link> </li>)
                        }
                        return null
                      }
                        
                    )}
                </ul> 
           </div> 
    )}
    />
)


export default MainMenu


// class MainMenu extends Component {
//     render() {

//         const data = this.props.menu
// console.log(data)
//         return (
//             <div>
//                 <h1>Main Menu</h1>
//                 {/* <ul>
//                     {data.map((item) =>
//                         <li key={item.object_slug}>
//                             <Link to={item.url}>
//                                 {item.title}
//                             </Link>
//                         </li>
//                     )}
//                 </ul> */}
//             </div>
//         )
//     }
// }

// export default MainMenu


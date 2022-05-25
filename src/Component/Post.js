import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Post() {
    // let  {category} = useParams();
    // const [searchParams,setSearchParams] =useSearchParams();
    // console.log("s",searchParams);
  return (
      <>
    <div>Post Page</div>
    <div className="card" >
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAD////h4eG0tLSXl5cgICD19fXFxcX4+PiwsLDBwcHV1dXx8fEYGBjq6uq6urqMjIwyMjI6Ojqfn59VVVVtbW2EhIR4eHiTk5NERETPz89ycnLa2tp+fn48PDzJyckUFBRkZGRYWFhnZ2cqKiqenp5LS0tTsdqMAAAB7UlEQVR4nO3Y23aqMBCAYQYKcggBRKpWbdVtff9H3DmAxnb1Zt/Ytfm/C5PJ5II1C4dAFAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODfde/pQ7xMf9g4Nx+Zoau+nhaGSoy8eZ8WChPqlSmhzrNMZVlePOdKf4FYFUnSVJItXVh/iO7Xw6ERefEbGumHVsmf6FIkxV7M5tcnXu5zxaUbrlLZoY6l9etpKe4OOkpvI+23beQJl/h7xAs/9q4MpZxumV7sLbSUwQadX3uZebH8LRO9iuniJ9kEqUrZRiZhi5p7scY7q7FlKNUxSJ1lHdn+3t6X5l6sqRkl5lc3YeroG1Uj5W1p5sXaiz0PiNgyddMTcMq5ph+1orbjytyLpc2JoG9dNbqHlmWali9WtLInB2fmxYrv/7GoVslDTk+5NJarm8y9WIsgeIvD1FZux8808xmKdbeWXRA1+eU234h7H6JYgX3W3eY7+TRPxOLsgrW4BMUKLPPsOk5bebNDrlxU5W6gWKFOy2LXpdtWj6erlaghXVX+pWfuxdqXXxY+lf1EI/Ewxmdtouzgg5m/SF++f9hbrQ+7bRCfDrvjOK27b7sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf/AVpMA8VuHF9XQAAAABJRU5ErkJggg==" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="btn btn-primary" >Go SoomeWhere</button>
  </div>
</div>
      </>
  )
}

export default Post
import {useState} from 'react';
import './blog.css';
import { Link } from "react-router-dom";

function Blog({item}) {

    let [title,setTitle] = useState(item.title);

    const onClickHandler = () => {
        setTitle("Changed Title");
        // fetch api to load date
        // item.id --> item._id
    }


    return (
        // <div className="blogContainer" style={{border: "solid"}}>
        //     <h4 style={{display: "inline"}}>{title}</h4>
        //     <h4 style={{display: "inline"}}>{item.subTitle}</h4>
        //     <p>{item.content}</p>
        //     <p>{item.author}</p>
        //     <button  onClick={onClickHandler}> Read More ... </button>
        // </div>
        
        <>
        
        <div className="post pos1">
      <img
        className="postImg"
        src={"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {item.author}
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
             {item.subTitle}
            </Link>
          </span>
        </div>
        {/* <span className="postTitle">
          < to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
        
        </span> */}
        <hr />
        {/* <span className="postDate">1 hour ago</span> */}
      </div>
      {/* <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p> */}
    </div>
        
        
        
        
        </>
        
        
        
        
        
        )

}



export default Blog;
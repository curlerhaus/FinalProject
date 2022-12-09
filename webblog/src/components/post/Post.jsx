import './post.css'

export default function post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://placedog.net/500" alt="testing" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Post Title 
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic soluta ab sunt cum optio veritatis sint ullam, dicta deserunt amet rerum quia doloribus quaerat sit pariatur temporibus quidem vitae velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil quas perferendis quibusdam at! Sed qui quos, quam porro inventore, eius consequatur, illum pariatur reiciendis impedit corporis harum perspiciatis dignissimos?</p>
    </div>
  )
}
 
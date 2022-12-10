import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://placedog.net/950/640/s" alt="" />
        </div>
        <h1 className="singlePostTitle">
            Single Post Title
            <div className="singlePostEdit">
                <i className='singlePostIcon fa-solid fa-pen-to-square'></i>
                <i className='singlePostIcon fa-solid fa-trash'></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Joel Dietz</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aliquam in numquam blanditiis officia omnis animi magnam expedita. Et enim maxime sed repudiandae consequatur voluptatibus perspiciatis cumque, distinctio totam nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio repellat quaerat sit illum sequi quod assumenda enim, sed reiciendis odio qui, ex sapiente laboriosam dolorum voluptatibus architecto esse repudiandae dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus doloremque dolores sunt? Mollitia repellat vel, dolorem aut, iure quidem alias nobis dolores totam natus, eveniet ipsa dolor vero neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sit asperiores optio reiciendis dolore accusantium labore, perferendis vero? Repellendus fugit eos unde. Repellendus quod vitae fugit animi, accusamus ut vel!</p>
    </div>
  )
}
